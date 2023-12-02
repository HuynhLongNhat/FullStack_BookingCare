import React, { Component } from "react";
import { connect } from "react-redux";
//chuyển đổi ngôn ngữ
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";
class OutStandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctor: [],
    };
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
      this.setState({
        arrDoctor: this.props.topDoctorsRedux,
      });
    }
  }
  componentDidMount() {
    this.props.loadTopDocTor();
  }
  render() {
    let arrDoctors = this.state.arrDoctor;
    let { language } = this.props;
    arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors);
    return (
      <div className="section section-out-standing-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              {arrDoctors &&
                arrDoctors.length > 0 &&
                arrDoctors.map((item, index) => {
                  let imageBase64 = "";
                  console.log("aadf image", item.image);
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                  }
                  let nameVi = `${item.positionData.valueVi} , ${item.lastName} ${item.firstName} `;
                  let nameEn = `${item.positionData.valueEn} , ${item.firstName}  ${item.lastName}`;
                  return (
                    <div className="section-customize" key={index}>
                      <div class="customize-border">
                        <div className="outer-bg">
                          <div
                            className="bg-image section-out-standing-doctor"
                            style={{
                              backgroundImage: `url(${imageBase64})`,
                            }}
                          ></div>
                        </div>
                        <div className="position text-center">
                          <div className="">
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                          </div>
                          <div>Cơ xương khớp 1</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
    topDoctorsRedux: state.admin.topDoctor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //fire event
    loadTopDocTor: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
