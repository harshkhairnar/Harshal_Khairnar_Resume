import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Savitribai phule pune university</h3>
                <h4>Mit College Of Engineering</h4>
                <div class="subheading mb-3">Information Technology</div>
               
                <p>Higher second Class (59.21%)</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2019</span>
              </div>
            </div>
            {/* <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Rajmata jijau shikshan prasarak mandals institute of computer and management research</h3>
                <div class="subheading mb-3">MBA in HR & BA</div>
                <p>First Class with Distinction (77%)</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2022</span>
              </div>
            </div> */}
             <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Maharashtra State Board</h3>
                <h4>Bhairavnath Sec. & Higher Sec. College</h4>
                <div class="subheading mb-3">12th Science</div>
               
                <p>Second Class (52.50%)</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2013</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Maharashtra State Board</h3>
                <h4>Bhairavnath Sec. & Higher Sec. College</h4>
                <div class="subheading mb-3">10th</div>
               
                <p>First Class (64.18%)</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">May 2011</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
