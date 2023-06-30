"use client"
import Head from "next/head";
import Image from "next/image";
import BannerImage  from "../../public/form.png"
import { useFormik } from "formik";
import * as Yup from "yup";
import toast,{Toaster} from "react-hot-toast";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      terms: "",
    },
    onSubmit: (values) => {
          toast.success("Successfully created!",{
            position:'top-center'
          });
    },
    validationSchema: Yup.object({
      name: Yup.string("Name must be String")?.required("Name is Required"),
      email: Yup?.string().email("Invalid Email").required("Email Is Required"),
      terms: Yup.boolean().required("Terms of service must be checked"),
    }),
  });


  console.log(formik)
  return (
    <>
      <Toaster />
      <Head>
        <title>Nextjs Formik </title>
        <description>form created using nextjs & formik</description>
      </Head>
      <main className="h-screen flex items-center justify-center">
        <form
          className="bg-teal-50 md:bg-white sm-flex-col md:flex  rounded-lg w-full md:w-1/2 font-latoRegular"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex-1 text-gray-700 p-4 md:p-8">
            <h1 className="sm:text-2xl text-3xl pb-2 font-latoBold">
              Lets Get Started.
            </h1>
            <p className="text-lg text-gray-500">
              Formik is the world's most popular open source form library for
              React and React Native.
            </p>
            {/* actual div form form*/}
            <div className="mt-4 md:mt-6">
              <div className="pb-2">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border-2 focus:ring-teal-500 border-gray-400 p-2 rounded-md w-full focus:border-teal-500"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik?.values?.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name ? (
                  <p className="block font-latoBold text-sm my-2 text-red-400">
                    {formik.errors.name}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>{" "}
            {/* input - email */}
            <div className="mt-6">
              <div className="pb-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border-2 focus:ring-teal-500 border-gray-400 p-2 rounded-md w-full focus:border-teal-500"
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={formik?.values?.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email ? (
                  <p className="block font-latoBold text-sm my-2 text-red-400">
                    {formik.errors.email}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* terms of service */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="terms"
              >
                Terms of Service
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="terms"
                  value={formik?.values?.terms}
                  onChange={formik.handleChange}
                  className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                />
                <p className="text-sm font-latoBold text-gray-500">
                  I agree to the Terms & Service that my data will be taken &
                  sold
                </p>
              </div>
              {formik.errors.terms ? (
                <p className="block font-latoBold text-sm my-2 text-red-400">
                  {formik.errors.terms}
                </p>
              ) : (
                <></>
              )}
            </div>
            {/* submit btn */}
            <button
              htmlFor="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Lets Get Started
            </button>
          </div>
          {/* image */}
          <div className="flex-1 relative">
            <Image
              src={BannerImage}
              fill
              className="object-cover rounded-r-lg"
            />
          </div>
        </form>
      </main>
    </>
  );
}
