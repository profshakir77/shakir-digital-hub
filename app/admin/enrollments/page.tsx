"use client";

import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import {
  useEffect,
  useState,
} from "react";

import { db } from "../../../lib/firebase";

interface Enrollment {

  id: string;

  name: string;

  email: string;

  phone: string;

  course: string;

  status?: string;

  createdAt?: any;
}

export default function AdminEnrollmentsPage() {

  const [enrollments,
    setEnrollments] =
    useState<Enrollment[]>(
      []
    );

  const [loading,
    setLoading] =
    useState(true);

  const [search,
    setSearch] =
    useState("");

  const [statusFilter,
    setStatusFilter] =
    useState("All");

  useEffect(() => {

    fetchEnrollments();

  }, []);

  const fetchEnrollments =
    async () => {

      try {

        const q = query(
          collection(
            db,
            "enrollments"
          ),
          orderBy(
            "createdAt",
            "desc"
          )
        );

        const snapshot =
          await getDocs(q);

        const data:
          Enrollment[] = [];

        snapshot.forEach(
          (docItem) => {

            data.push({

              id: docItem.id,

              ...(docItem.data() as Enrollment),
            });
          }
        );

        setEnrollments(
          data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  const handleDelete =
    async (
      id: string
    ) => {

      const confirmDelete =
        confirm(
          "Delete this enrollment?"
        );

      if (
        !confirmDelete
      )
        return;

      try {

        await deleteDoc(
          doc(
            db,
            "enrollments",
            id
          )
        );

        setEnrollments(
          (
            prev
          ) =>
            prev.filter(
              (
                item
              ) =>
                item.id !==
                id
            )
        );

      } catch (error) {

        console.log(error);

        alert(
          "Failed to delete"
        );
      }
    };

  const updateStatus =
    async (
      id: string,
      status: string
    ) => {

      try {

        await updateDoc(
          doc(
            db,
            "enrollments",
            id
          ),
          {
            status,
          }
        );

        setEnrollments(
          (
            prev
          ) =>
            prev.map(
              (
                item
              ) =>
                item.id ===
                id
                  ? {
                      ...item,
                      status,
                    }
                  : item
            )
        );

      } catch (error) {

        console.log(error);

        alert(
          "Failed to update status"
        );
      }
    };

  const filteredEnrollments =
    enrollments.filter(
      (
        enrollment
      ) => {

        const matchesSearch =
          enrollment.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          enrollment.email
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          enrollment.course
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesStatus =
          statusFilter ===
            "All" ||
          enrollment.status ===
            statusFilter;

        return (
          matchesSearch &&
          matchesStatus
        );
      }
    );

  const totalEnrollments =
    enrollments.length;

  const pendingCount =
    enrollments.filter(
      (
        item
      ) =>
        !item.status ||
        item.status ===
          "Pending"
    ).length;

  const contactedCount =
    enrollments.filter(
      (
        item
      ) =>
        item.status ===
        "Contacted"
    ).length;

  const enrolledCount =
    enrollments.filter(
      (
        item
      ) =>
        item.status ===
        "Enrolled"
    ).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">

          <span className="bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm">

            Admin Dashboard

          </span>

          <h1 className="text-5xl md:text-6xl font-black mt-6">

            Student
            <span className="block gradient-text">
              Enrollments
            </span>

          </h1>

        </div>

        {/* Analytics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="glass-effect rounded-3xl p-8">

            <div className="text-5xl mb-4">
              📊
            </div>

            <h3 className="text-4xl font-black gradient-text mb-2">

              {totalEnrollments}

            </h3>

            <p className="text-slate-400">
              Total Enrollments
            </p>

          </div>

          <div className="glass-effect rounded-3xl p-8">

            <div className="text-5xl mb-4">
              ⏳
            </div>

            <h3 className="text-4xl font-black text-yellow-400 mb-2">

              {pendingCount}

            </h3>

            <p className="text-slate-400">
              Pending
            </p>

          </div>

          <div className="glass-effect rounded-3xl p-8">

            <div className="text-5xl mb-4">
              📞
            </div>

            <h3 className="text-4xl font-black text-blue-400 mb-2">

              {contactedCount}

            </h3>

            <p className="text-slate-400">
              Contacted
            </p>

          </div>

          <div className="glass-effect rounded-3xl p-8">

            <div className="text-5xl mb-4">
              🎓
            </div>

            <h3 className="text-4xl font-black text-green-400 mb-2">

              {enrolledCount}

            </h3>

            <p className="text-slate-400">
              Enrolled
            </p>

          </div>

        </div>

        {/* Filters */}
        <div className="glass-effect rounded-3xl p-6 mb-10 grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Search students, email, course..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-500"
          />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }
            className="bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-500"
          >

            <option>
              All
            </option>

            <option>
              Pending
            </option>

            <option>
              Contacted
            </option>

            <option>
              Enrolled
            </option>

          </select>

        </div>

        {/* Loading */}
        {loading && (

          <div className="text-2xl">
            Loading...
          </div>

        )}

        {/* Empty */}
        {!loading &&
          filteredEnrollments.length ===
            0 && (

          <div className="glass-effect rounded-3xl p-10 text-center text-slate-400">

            No enrollments found.

          </div>

        )}

        {/* Table */}
        {!loading &&
          filteredEnrollments.length >
            0 && (

          <div className="overflow-x-auto">

            <table className="w-full glass-effect rounded-3xl overflow-hidden">

              <thead className="bg-slate-900">

                <tr>

                  <th className="text-left p-6">
                    Student
                  </th>

                  <th className="text-left p-6">
                    Email
                  </th>

                  <th className="text-left p-6">
                    Phone
                  </th>

                  <th className="text-left p-6">
                    Course
                  </th>

                  <th className="text-left p-6">
                    Status
                  </th>

                  <th className="text-left p-6">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredEnrollments.map(
                  (
                    enrollment
                  ) => (

                    <tr
                      key={
                        enrollment.id
                      }
                      className="border-t border-slate-800"
                    >

                      <td className="p-6 font-bold">

                        {
                          enrollment.name
                        }

                      </td>

                      <td className="p-6 text-slate-300">

                        {
                          enrollment.email
                        }

                      </td>

                      <td className="p-6 text-slate-300">

                        {
                          enrollment.phone
                        }

                      </td>

                      <td className="p-6">

                        <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm">

                          {
                            enrollment.course
                          }

                        </span>

                      </td>

                      <td className="p-6">

                        <select
                          value={
                            enrollment.status ||
                            "Pending"
                          }
                          onChange={(
                            e
                          ) =>
                            updateStatus(
                              enrollment.id,
                              e.target
                                .value
                            )
                          }
                          className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl outline-none"
                        >

                          <option>
                            Pending
                          </option>

                          <option>
                            Contacted
                          </option>

                          <option>
                            Enrolled
                          </option>

                        </select>

                      </td>

                      <td className="p-6">

                        <button
                          onClick={() =>
                            handleDelete(
                              enrollment.id
                            )
                          }
                          className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl font-bold"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}