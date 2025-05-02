import { fontHeader } from "@/utils/fonts";

export default function AboutShelter() {

    return (
        <section className="p-8 text-white w-full grid place-items-center flex flex-col gap-6">
            <h2 className={`${fontHeader.className} text-2xl font-semibold text-white text-center`}>- About The Shelter -</h2>

            <p className="text-white/80 text-2xl ">San Pedro Animal Shelter is a private and non-profit non-Government Animal Rescue Shelter located in San Pedro Laguna, founded by Wilma Evangelista and other volunteers.
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.5424597013503!2d121.0106479!3d14.3379891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d766461463b9%3A0xa3917346cb143040!2sSan%20Pedro%20Animal%20Shelter!5e0!3m2!1sen!2sph!4v1746202805818!5m2!1sen!2sph" className=" rounded-xl" width={600} height={300} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </section>
    )
}