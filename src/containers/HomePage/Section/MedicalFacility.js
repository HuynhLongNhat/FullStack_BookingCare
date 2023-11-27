import React, { Component } from "react";
import { connect } from "react-redux";
//chuyển đổi ngôn ngữ
import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>

                <div>Bệnh viện Việt Đức 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>

                <div>Bệnh viện Việt Đức 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>

                <div>Bệnh viện Việt Đức 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>

                <div>Bệnh viện Việt Đức 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>

                <div>Bệnh viện Việt Đức 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <div>Bệnh viện Việt Đức 6</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fire event
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
