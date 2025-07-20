import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-[#101010] py-20 px-4 md:px-10 lg:px-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="space-y-6 animate-fadeInLeft">
          <h5 className="text-[#e0c840] text-sm tracking-widest">SINCE 2004</h5>
          <h2 className="text-3xl md:text-4xl font-bold">HELLO, I'M ARSLAN KHIZAR</h2>
          <p className="text-[#b0b0b0]">
            Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum.
            Curabitur molestie, nisl quis porta laoreet.
          </p>
          <p className="italic text-[#b0b0b0] border-l-4 border-[#e0c840] pl-4">
            “Cras auctor sapien nunc, et imperdiet lorem aliquam vel. Vestibulum eu enim mi. Nam ut
            orci eget arcu rutrum molestie. Maecenas augue ligula, blandit et lorem”
          </p>
          <div>
            <h3 className="text-lg font-semibold">ARSLAN KHIZAR</h3>
            <p className="text-sm text-[#b0b0b0]">Editor & Videography</p>
          </div>
        </div>

        <div className="flex justify-end">
          <Image
          width='300'
          height='200'
            src="/images/F2-1.jpg"
            alt="Alex Videen"
            className="w-full max-w-sm rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

