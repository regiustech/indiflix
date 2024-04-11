import React from "react";
import Layout from "./../Layout/Layout";
import Head from "../Components/Head";
import mobile from "../assets/mobile2.jpeg";

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-20 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Indiflix
              </h3>{" "}
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mollis orci non urna ultricies mattis. Mauris gravida nec
                  tortor malesuada eleifend. Maecenas vitae vulputate odio.
                  Vivamus id enim ultricies, aliquam est sed, venenatis tellus.
                  Proin fermentum nec urna at scelerisque. Aenean sem enim,
                  imperdiet eget dignissim ac, semper a sapien. Curabitur vitae
                  diam justo. Ut ac ante quam. Curabitur at fringilla enim, sed
                  suscipit urna. Curabitur ultrices augue mi, sed hendrerit
                  dolor mattis sed. Duis mattis nibh felis, et viverra ante
                  ornare eu. Vivamus eu dui ac magna ultricies luctus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mollis orci non urna ultricies mattis. Mauris gravida nec
                  tortor malesuada eleifend. Maecenas vitae vulputate odio.
                  Vivamus id enim ultricies, aliquam est sed, venenatis tellus.
                  Proin fermentum nec urna at scelerisque. Aenean sem enim,
                  imperdiet eget dignissim ac, semper a sapien. Curabitur vitae
                  diam justo.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">10K</span>
                  <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">8K</span>
                  <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                  </p>
                </div>
              </div>
            </div>

            <img
              src={mobile}
              alt="aboutus"
              className="w-full xl:block hidden h-header rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
