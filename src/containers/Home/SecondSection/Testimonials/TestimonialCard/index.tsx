import Image from "next/image";
import Rating from "containers/Home/SecondSection/Testimonials/TestimonialCard/Rating";

const TestimonialCard = () => {
    return (
        <article className="flex flex-col bg-white rounded-xl shadow w-[288px] h-[281px] p-4">
            <div className="flex mb-4">
                <figure className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
                    <Image
                        src="/assets/home/profile.png"
                        alt="profile dummy"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        />
                </figure>

                <div className="flex flex-col">
                    <p className="text-heading-4 text-gray-100 font-label font-bold mb-1">
                        Hadi Sulistio
                    </p>
                    <p className="text-heading-5 text-gray-50 font-bold">
                        Cengkareng, Jakarta
                    </p>
                </div>
            </div>

            <Rating/>

            <p className="text-heading-5 text-gray-70 my-4">
                Nyari apapun gampang bersama tour guide Mr.Tio, Orangnya Responsif parah euy
            </p>
            <p className="text-heading-5 text-gray-100 font-bold">
                Lombok, NTT
            </p>
            <p className="text-heading-6 text-gray-50">
                01-01-2024
            </p>
        </article>
    )
}

export default TestimonialCard