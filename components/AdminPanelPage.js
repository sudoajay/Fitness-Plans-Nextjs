import LogOutButton from "@/components/LogOutButton";
import { useState, useEffect } from "react";
import AdminPanelTable from "./AdminPanelTable";
import AdminInformationPanelTable from "./AdminInformationPanelTable";
import {PanelSettingButton} from "@/components/BackToPanel";

import axios from "axios";
import Router from "next/router";

function AdminPanelPage() {
  const [getDatabaseData, setDatabaseData] = useState([]);

  const [getDatabaseDataForAdmin, setDatabaseDataForAdmin] = useState([]);

  const [getUserName, setUserName] = useState("");

  const [getTotalAmount, setTotalAmount] = useState(0);

  const [getTotalEarning, setTotalEarning] = useState(0);

  const [getTotalPaid, setTotalPaid] = useState(0);

  const [getBalance, setBalance] = useState(0);

  useEffect(() => {
    console.log("Somethingc eomes heree");
    checkIfSessionPresent().then((res) => {
      if (res) {
        getAllDataFromDataBase().then((data) => {
          setUserName(res);
          setDatabaseData(data);
          let totalAmount = 0;
          if (res != "ADMIN") {
            data.map((value, index) => {
              let amount = value.Amount.replaceAll(/\s/g, "");
              totalAmount += parseFloat(
                amount.toLowerCase().includes("rs")
                  ? amount.toLowerCase().replace("rs", "") /
                      parseInt(process.env.INR_TO_DOLLOR)
                  : amount.toLowerCase().replace("$", "")
              );
            });
            setTotalAmount(totalAmount.toFixed(2));

            getTotalAmountPaid().then((amount) => {
              setTotalPaid(
                amount
                  .toLowerCase()
                  .replaceAll(/\s/g, "")
                  .replace("rs", "")
                  .replace("$", "")
              );
            });
          } else {
            getAllDataForAdmin().then((data) => {
              setDatabaseDataForAdmin(data);
              console.log(" Data + " + data);
            });
          }
        });
      } else {
         Router.push("/login");
      }
    });
  }, []);

  useEffect(() => {
    let percent = parseInt(
      getUserName.substring(getUserName.length - 2, getUserName.length)
    );

    setTotalEarning(
      parseFloat(((100 - percent) / 100) * getTotalAmount).toFixed(2)
    );
  }, [getTotalAmount]);

  useEffect(() => {
    setBalance(parseFloat(getTotalEarning - getTotalPaid).toFixed(2));
  }, [getTotalPaid]);

  async function checkIfSessionPresent() {
    const dataSend = {
      username: "",
      password: "",
      callfunction: "SessionPresent",
    };
    try {
      const Login_PATH =
        "https://fitness-plans.regimefit.com/api/login-database-connector.php";

      let res = await axios({
        url: Login_PATH,
        method: "post",
        timeout: 8000,
        data: dataSend,

        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async function getTotalAmountPaid() {
    const dataSend = {
      username: "",
      password: "",
      callfunction: "AmountPaid",
    };
    try {
      const Login_PATH =
        "https://fitness-plans.regimefit.com/api/login-database-connector.php";

      let res = await axios({
        url: Login_PATH,
        method: "post",
        timeout: 8000,
        data: dataSend,

        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async function getAllDataFromDataBase() {
    const dataSend = {
      username: "",
      password: "",
      callfunction: "GetAllDataTable",
    };
    try {
      const Login_PATH =
        "https://fitness-plans.regimefit.com/api/payment_database_connector.php";

      let res = await axios({
        url: Login_PATH,
        method: "post",
        timeout: 8000,
        data: dataSend,

        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async function getAllDataForAdmin() {
    const dataSend = {
      username: "",
      password: "",
      callfunction: "getAllData",
    };
    try {
      const Login_PATH =
        "https://fitness-plans.regimefit.com/api/login-database-connector.php";

      let res = await axios({
        url: Login_PATH,
        method: "post",
        timeout: 8000,
        data: dataSend,

        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        // test for status you want, etc
        console.log(res.status);
      }
      // Don't forget to return something
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div class="mx-auto container flex items-center" id="nav">
        <div class="w-full pt-0 p-8">
          <div class="mx-auto md:p-6 w-full">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-6">
              <AdminPanelTable
                databaseData={getDatabaseData}
                userName={getUserName}
              />

              {getUserName == "ADMIN" ? (
                <AdminInformationPanelTable
                  databaseData={getDatabaseDataForAdmin}
                />
              ) : (
                <div class="grid grid-cols-4">
                  <div class="col-start-4 col-end-4">
                    <div className="min-h-0 max-w-4xl my-4 sm:my-4 mx-auto w-full">
                      <table className=" mx-auto">
                        <tbody className="divide-y divide-palette-lighter">
                          {1 === 0 ? null : (
                            <tr className="text-center">
                              <td></td>

                              <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                                Total Amount
                              </td>
                              <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                                {parseFloat(getTotalAmount).toFixed(2)} $
                              </td>
                              <td></td>
                            </tr>
                          )}
                        </tbody>
                        <tbody className="divide-y divide-palette-lighter ">
                          {1 === 0 ? null : (
                            <tr className="text-center">
                              <td></td>
                              <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                                Total Earning
                              </td>
                              <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                                {parseFloat(getTotalEarning).toFixed(2)} $
                              </td>
                              <td></td>
                            </tr>
                          )}
                        </tbody>

                        <tbody className="divide-y divide-palette-lighter">
                          {1 === 0 ? null : (
                            <tr className="text-center">
                              <td></td>
                              <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                                Amount Paid
                              </td>
                              <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                                {parseFloat(getTotalPaid).toFixed(2)} $
                              </td>
                              <td></td>
                            </tr>
                          )}
                          {1 === 0 ? null : (
                            <tr className="text-center">
                              <td></td>
                              <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                                Balance
                              </td>
                              <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                                {parseFloat(getBalance).toFixed(2)} $
                              </td>
                              <td></td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto space-y-4 px-2">
      <PanelSettingButton text={"Panel Setting"} url={"/admin-panel-setting"} />

        <LogOutButton showText={"Logout"} webUrl={"/login"} />
      </div>
    </div>
  );
}
export default AdminPanelPage;
