import React from "react";

const Estimate = () => (
  <section className="section container">
    <h2>견적 문의</h2>
    <form
      action="https://formspree.io/f/mjkyeqdq"
      method="POST"
      className="estimate-form"
    >
      <label>
        이름
        <input type="text" name="name" required />
      </label>

      <label>
        연락처
        <input type="tel" name="phone" required />
      </label>

      <label>
        펜스 종류
        <select name="type" required>
          <option value="">선택하세요</option>
          <option value="메쉬휀스">메쉬휀스</option>
          <option value="디자인휀스">디자인휀스</option>
          <option value="합성목휀스">합성목휀스</option>
          <option value="특수휀스">특수휀스</option>
        </select>
      </label>

      <label>
        현장 주소
        <input type="text" name="address" required />
      </label>

      <label>
        설명
        <textarea name="message" rows="4" placeholder="자유롭게 적어주세요" />
      </label>

      <button type="submit" className="btn-submit">견적 요청</button>
    </form>
  </section>
);

export default Estimate;