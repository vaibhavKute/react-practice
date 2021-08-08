import React from "react";

function Header() {
  return (
    <div>
      <div class="clients">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>what say our clients</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clients_red">
        <div class="container">
          <div
            id="testimonial_slider"
            class="carousel slide"
            data-ride="carousel"
          >
            <ul class="carousel-indicators">
              <li
                data-target="#testimonial_slider"
                data-slide-to="0"
                class=""
              ></li>
              <li
                data-target="#testimonial_slider"
                data-slide-to="1"
                class="active"
              ></li>
              <li
                data-target="#testimonial_slider"
                data-slide-to="2"
                class=""
              ></li>
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item">
                <div class="testomonial_section">
                  <div class="full center"></div>
                  <div class="full testimonial_cont text_align_center cross_layout">
                    <div class="cross_inner">
                      <h3>
                        Due markes
                        <br />
                        <strong class="ornage_color">Rental</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit ess
                      </p>
                      <div class="full text_align_center margin_top_30">
                        <img src="assets/icon/testimonial_qoute.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item active">
                <div class="testomonial_section">
                  <div class="full center"></div>
                  <div class="full testimonial_cont text_align_center cross_layout">
                    <div class="cross_inner">
                      <h3>
                        Due markes
                        <br />
                        <strong class="ornage_color">Rental</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit ess
                      </p>
                      <div class="full text_align_center margin_top_30">
                        <img src="assets/icon/testimonial_qoute.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testomonial_section">
                  <div class="full center"></div>
                  <div class="full testimonial_cont text_align_center cross_layout">
                    <div class="cross_inner">
                      <h3>
                        Due markes
                        <br />
                        <strong class="ornage_color">Rental</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit ess
                      </p>
                      <div class="full text_align_center margin_top_30">
                        <img src="assets/icon/testimonial_qoute.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
