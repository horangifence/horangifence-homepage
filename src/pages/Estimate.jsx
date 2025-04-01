import React from "react";
import { Phone, MessageSquare } from "lucide-react";

const Estimate = () => (
  <section className="section container">
    <h2>견적 문의</h2>
    <p>전화 또는 문자로 빠르게 견적을 받아보세요.</p>
    <div className="buttons">
      <a href="tel:01021373387" className="action-button"><Phone size={18} /><span>전화하기</span></a>
      <a href="sms:01021373387" className="action-button sms"><MessageSquare size={18} /><span>문자보내기</span></a>
    </div>
  </section>
);

export default Estimate;