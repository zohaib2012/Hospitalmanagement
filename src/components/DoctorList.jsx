import React, { useEffect } from 'react';
import { usedoctorstore } from '../lib/store/usedoctorstore';
// import { useDoctorStore } from './store'; // Ensure the path is correct

const DoctorList = () => {
    const { Doctors, loading, getdoctor } = usedoctorstore(); // Accessing Zustand store

    // console.log(Doctors)
    useEffect(() => {
        getdoctor(); // Fetch doctors when the component mounts
    }, [getdoctor]);
    // console.log(Doctors)

    if (loading) {
        return <div className="text-center">Loading...</div>; // Loading state
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Doctors List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 text-left">
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Specialization</th>
                            <th className="px-4 py-2 border-b">Consultation Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Doctors.length > 0 ? (
                            Doctors.map((doctor) => (
                                <tr key={doctor._id} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border-b">{doctor.name}</td>
                                    <td className="px-4 py-2 border-b">{doctor.email}</td>
                                    <td className="px-4 py-2 border-b">{doctor.specialization}</td>
                                    <td className="px-4 py-2 border-b">{doctor.consultationFees}</td>
                                </tr> 
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No doctors found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorList;
