import React, { useState } from "react";
import "./App.css";

const CompanyInfoForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    employees: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("companyInfo", JSON.stringify(formData));
    alert("Ma'lumotlar saqlandi!");
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>Vakansiyalar</li>
          <li>Kandidatlar</li>
          <li>Kompaniyalar</li>
          <li>Xizmatlar</li>
          <li>Ta'lim</li>
          <li>
            <select>
              <option value="uz">O'z</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
          </li>
          <li>
            <button>Boshlash</button>
          </li>
        </ul>
      </nav>
      <h2>Kompaniya ma'lumotlari</h2>
      <p>Kompaniya haqida ma'lumotlarni kiriting</p>
      <form onSubmit={handleSubmit}>
        <div className="profile-picture">
          <div className="circle"></div>
          <button type="button">Yuklash</button>
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Kompaniya nomi</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Kompaniya nomi"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefon raqami</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Uz +998"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Linklar</label>
          <div className="links">
            <i className="fab fa-internet-explorer"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="country">Davlat</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Davlat</option>
            <option value="uzbekistan">Uzbekistan</option>
            <option value="russia">Russia</option>
            <option value="usa">Qirgistan</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">Shahar</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Shahar</option>
            <option value="tashkent">Tashkent</option>
            <option value="moscow">Fargona</option>
            <option value="newyork">Andijon</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Yashash joyi</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Joy"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="employees">Hodimlar soni</label>
          <input
            type="number"
            id="employees"
            name="employees"
            placeholder="Hodimlar soni"
            value={formData.employees}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Izoh</label>
          <textarea
            id="description"
            name="description"
            placeholder="Kompaniya haqida izoh qoldiring"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="button">Orqaga</button>
          <button type="submit">Keyingisi</button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfoForm;
