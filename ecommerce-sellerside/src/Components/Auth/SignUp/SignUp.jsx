import React from "react";
import "./SignUp.css";
import SignUpImg from "../../../assets/Imgs/SingUp.jpg";

const SignUp = () => {
  return (
    <>
      <section className="sing">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-8 col-sm-12 p-3">
              <img
                src={SignUpImg}
                alt="Image"
                className="figure-img img-fluid rounded"
              />
            </div>

            <div className="col-lg-7 col-md-4 col-sm-12">
              <div className="p-5">
                <form action="">
                  {/* <h3>Registration Form</h3> */}
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="First Name"
                      class="form-control"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="form-control"
                    />
                  </div>
                  <div class="form-wrapper">
                    <input
                      type="text"
                      placeholder="Username"
                      class="form-control"
                    />
                    <i class="zmdi zmdi-account"></i>
                  </div>
                  <div class="form-wrapper">
                    <input
                      type="text"
                      placeholder="Email Address"
                      class="form-control"
                    />
                    <i class="zmdi zmdi-email"></i>
                  </div>
                  <div class="form-wrapper">
                    <select name="" id="" class="form-control">
                      <option value="" disabled selected>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="femal">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <i class="zmdi zmdi-caret-down"></i>
                  </div>
                  <div class="form-wrapper">
                    <input
                      type="password"
                      placeholder="Password"
                      class="form-control"
                    />
                    <i class="zmdi zmdi-lock"></i>
                  </div>
                  <div class="form-wrapper">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      class="form-control"
                    />
                    <i class="zmdi zmdi-lock"></i>
                  </div>
                  <button>
                    Register
                    <i class="zmdi zmdi-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
