import React, { Component } from 'react';
import MyForm from './Form'
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any inquiries
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4> Cell :
                  {resumeData.number}
                </h4>
                <h4>Whatsapp :
                  {resumeData.number2}
                </h4>
                <h4>Gmail:</h4>
                <p>gierdienusama@gmail.com</p>
                <MyForm/>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}