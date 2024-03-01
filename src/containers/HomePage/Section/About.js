import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section section-about">
        <div className="section-about-header">
          Truyền thông nói gì về Long Nhật
        </div>
        <div className="section-about-content">
          <div className="section-about-content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/147SkAVXEqM"
              title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="section-about-content-right">
            <div>
              <p>
                ✔ Các bạn có thể làm chủ công nghệ, cũng như học được, biết được
                những kiến thức thực tế dùng tại các công ty hiện nay. Sau khi
                kết thúc khóa học này, mình tin chắc rằng dự án này đủ lớn, đủ
                thực tế để cho các bạn mới ra trường viết vào CV xin việc của
                mình ^^.<br></br>✔ Các bạn hiểu được 1 FullStack Web Developer
                thì cần chuẩn bị những gì. Ở đây, mình không dám chắc 100% các
                bạn sẽ trở thành Fullstack Developer, nhưng nếu bạn chọn
                Frontend hay Backend thì khóa học này cũng cung cấp cho bạn
                nhiều điều bổ ích.
              </p>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
