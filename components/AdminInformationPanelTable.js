import { useState, useEffect } from "react";

function AdminPanelTable({ databaseData }) {
  const [getArr, setArr] = useState([]);

  const [getDatabaseData, setDatabaseData] = useState(databaseData);

  const [getPageNo, setPageNo] = useState(1);

  const [getSearch, setSearch] = useState("");

  useEffect(() => {
    setArr([
      "PromoCode",
      "PercentOff",
      "Password",
      "Created",
      "AmountPaid"
    ]);
  }, []);

  useEffect(() => {
    console.log(getPageNo);
    setPageNo(1)
    setDatabaseData(
      databaseData.filter(
        (element) =>
          element.PromoCode.toLowerCase().indexOf(getSearch.toLowerCase()) !== -1 ||
          element.AmountPaid.toLowerCase().indexOf(getSearch.toLowerCase()) !== -1 
         
      )
    );
  }, [getSearch  ]);


  useEffect(() => {

    setDatabaseData(
      databaseData.filter(
        (element) =>
        element.PromoCode.toLowerCase().indexOf(getSearch.toLowerCase()) !== -1 ||
        element.AmountPaid.toLowerCase().indexOf(getSearch.toLowerCase()) !== -1 
         
      )
    );
  }, [getPageNo ]);



  useEffect(() => {
    setDatabaseData(databaseData);
  }, [databaseData]);


  const onClickPrevious = () => {
    setPageNo(getPageNo - 1 == 0 ? 1 : getPageNo - 1);
  };

  const onClickNext = () => {
    setPageNo(
      getPageNo + 1 > Math.ceil(getDatabaseData.length / 5)
        ? Math.ceil(getDatabaseData.length / 5)
        : getPageNo + 1
    );
  };

  const onClick = (value) => {
    setPageNo(value);
  };

  // useEffect(() => {
  //   setDatabaseData(databaseData);
  // }, [databaseData]);

  // useEffect(() => {
  //   setArr(arr);
  // }, [arr]);

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg pl-8 pr-4 pb-8 pt-8 mt-8">
      <div class="flex items-center justify-between pb-4  " >
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for data"
            value={getSearch}
            onChange={(evt) => {
              setSearch(evt.target.value);
            }}
          />
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 pr-4 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3  dark:text-white">
              ID
            </th>

            {getArr.map((value, index) =>
           
                <th scope="col" class="px-6 py-3  dark:text-white">
                  <div class="flex items-center">{value}</div>
                </th>
              
              
            )}
          </tr>
        </thead>
        <tbody>
          {getDatabaseData
            .filter(
              (element, index) =>
                index >= 5 * (getPageNo - 1) && index < 5 * getPageNo
            )
            .map((value, index) =>

          
            
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-500">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {((getPageNo -1) *5)  + index + 1}
                  </th>
                  <td class="px-6 py-4  dark:text-white">{value.PromoCode}</td>
                  <td class="px-6 py-4  dark:text-white">{value.PercentOff}</td>
                  <td class="px-6 py-4  dark:text-white">{value.Password}</td>
                  <td class="px-6 py-4 dark:text-white">{value.Created}</td>
                  <td class="px-6 py-4 dark:text-white">{value.AmountPaid}</td>
                
                </tr>
          
            )}
        </tbody>
      </table>

      <nav
        class="flex items-center justify-between pt-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-900 dark:text-black">
          Showing{" "}
          <span class="font-bold text-gray-900 dark:text-black">
            {5 * (getPageNo - 1) == 0 ? 1 : 5 * (getPageNo - 1) +1 } -{" "}
            {getDatabaseData.length > 5 * getPageNo
              ? 5 * getPageNo
              : getDatabaseData.length}
          </span>{" "}
          of{" "}
          <span class="font-bold text-gray-900 dark:text-black">
            {getDatabaseData.length}
          </span>
        </span>
        <ul class="inline-flex -space-x-px text-sm h-8 ">
          <li>
            <a
              onClick={onClickPrevious}
              class="flex items-center justify-center px-6 h-8 leading-tight text-gray-500 bg-white border rounded-l-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>

          {getDatabaseData
            .filter((value, id) => id % 5 == 0)
            .map((value, index) => (
              <li>
                <a
                  onClick={() => onClick(index + 1)}
                  class="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {index + 1}
                </a>
              </li>
            ))}

          <li>
            <a
              onClick={onClickNext}
              class="flex items-center justify-center px-6 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>

      
    </div>


  );
}

export default AdminPanelTable;
