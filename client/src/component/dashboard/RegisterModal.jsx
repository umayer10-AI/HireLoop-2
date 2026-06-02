"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, X, Upload, MapPin, ChevronDown } from "lucide-react";

export const CompanyRegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log({
      ...data,
      logo: data.logo?.[0],
    });

    // Modal close
    setIsOpen(false);

    // Reset form
    reset();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        <Plus size={16} />
        Register a company
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] w-full max-w-xl rounded-xl border border-gray-800 p-6 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Register New Company
                </h2>
                <p className="text-gray-400 text-sm">
                  Enter your business details to start hiring on HireLoop.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Company Name & Industry */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    {...register("companyName", { required: true })}
                    className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-300">
                    Industry / Category
                  </label>

                  <div className="relative">
                    <select
                      {...register("industry")}
                      className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white appearance-none"
                    >
                      <option value="Technology">Technology</option>
                      <option value="Software">Software</option>
                      <option value="Finance">Finance</option>
                      <option value="Education">Education</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>

                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-500"
                      size={16}
                    />
                  </div>
                </div>
              </div>

              {/* Website & Location */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">
                    Website URL
                  </label>

                  <input
                    type="url"
                    placeholder="https://www.company.com"
                    {...register("website")}
                    className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-300">
                    Location
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="City, Country"
                      {...register("location")}
                      className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 pl-9 text-sm text-white"
                    />

                    <MapPin
                      className="absolute left-3 top-3 text-gray-500"
                      size={16}
                    />
                  </div>
                </div>
              </div>

              {/* Employee Count & Logo */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">
                    Employee Count Range
                  </label>

                  <div className="relative">
                    <select
                      {...register("employeeCount")}
                      className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white appearance-none"
                    >
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>

                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-500"
                      size={16}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-300">
                    Company Logo
                  </label>

                  <label className="border border-dashed border-gray-700 rounded-lg p-2 flex items-center gap-3 cursor-pointer">
                    <div className="bg-[#121212] p-2 rounded">
                      <Upload size={16} className="text-gray-400" />
                    </div>

                    <div>
                      <p className="text-xs text-white">
                        Upload image
                      </p>
                      <p className="text-[10px] text-gray-500">
                        PNG, JPG up to 5MB
                      </p>
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      {...register("logo")}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 space-y-1">
                <label className="text-sm text-gray-300">
                  Brief Description
                </label>

                <textarea
                  {...register("description")}
                  placeholder="Tell us about your company's mission and culture..."
                  className="w-full h-24 bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 text-sm text-white hover:bg-gray-800 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200"
                >
                  Register Company
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};