import React, { Component } from "react";
import { connect } from "react-redux";
//chuyển đổi ngôn ngữ
import Slider from "react-slick";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section section-out-standing-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div class="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-out-standing-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">Giáo sư , Tiến Sĩ Long Nhật</div>
                    <div>Cơ xương khớp 1</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div class="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-out-standing-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">Giáo sư , Tiến Sĩ Long Nhật</div>
                    <div>Cơ xương khớp 2</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div class="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-out-standing-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">Giáo sư , Tiến Sĩ Long Nhật</div>
                    <div>Cơ xương khớp 3</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div class="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-out-standing-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">Giáo sư , Tiến Sĩ Long Nhật</div>
                    <div>Cơ xương khớp 4</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div class="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-out-standing-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">Giáo sư , Tiến Sĩ Long Nhật</div>
                    <div>Cơ xương khớp 5</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div class="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-out-standing-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">Giáo sư , Tiến Sĩ Long Nhật</div>
                    <div>Cơ xương khớp 6</div>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);