import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">If you want to hear more about my experience click below</h2>

            <form className="form-inline d-flex">
              <button type="submit" onClick={() => {window.location.href="../../public/Resume2020.pdf"}} className="btn btn-primary mx-auto">
                My Resume
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
