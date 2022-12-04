import React, { createContext, useState, useEffect } from "react";
import { getCategories } from "../services/categories/categories";
import { getDepartments } from "../services/departments/departments";
import { getInformationPages } from "../services/informationPage/informationPAge";
import { getOrders } from "../services/orders/ordersServices";
import { getProducts } from "../services/products/productServices";
import { getStores } from "../services/stores/stores";
export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [departmentDate, setDepartmentData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [informationPageData, setInformationPageData] = useState([]);
  const [storesData, setStoresData] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProductData(res.product));
    getDepartments().then((res) => setDepartmentData(res.departments));
    getCategories().then((res) => setCategoriesData(res.categories));
    getOrders().then((res) => setOrdersData(res.orders));
    getInformationPages().then((res) => setInformationPageData(res.infoPages));
    getStores().then((res) => setStoresData(res.store));
  }, []);

  return (
    <dataContext.Provider
      value={{
        productData,
        setProductData,
        departmentDate,
        setDepartmentData,
        categoriesData,
        setCategoriesData,
        ordersData,
        setOrdersData,
        informationPageData,
        setInformationPageData,
        storesData,
        setStoresData,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
export default DataProvider;
