"use client";

// Import area
import React from "react";
// Import defaultImport from 'some library/somelocation'
import DataTable from "react-data-table-component";

//Define it
  let columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "FK Account",
      selector: (row) => row.fk_ac,
      sortable: true,
    },
    {
      name: "Product Link",
      selector: (row) => row.prod_link,
      sortable: true,
    },
    {
      name: "CC Holder Name",
      selector: (row) => row.cc_holderName,
      sortable: true,
    },
    {
      name: "CC Account",
      selector: (row) => row.cc_number,
      sortable: true,
    },
    {
      name: "Gift Card Amount",
      selector: (row) => row.gc_amount,
      sortable: true,
    },
    {
      name: "Tx Amount",
      selector: (row) => row.tx_amt,
      sortable: true,
    },
    {
      name: "Final Price",
      selector: (row) => row.final_price,
      sortable: true,
    },
    {
      name: "GiftCard OTP",
      selector: (row) => row.gc_otp,
      sortable: true,
    },
    {
      name: "Purchase OTP",
      selector: (row) => row.purchase_otp,
      sortable: true,
    },
    {
      name: "Remarks",
      selector: (row) => row.remark,
      sortable: true,
    },
    {
      name: "Purchase Started At",
      selector: (row) => row.purchase_start,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
      cell: (row) => (
        <button
          className="btn btn-danger text-white btn-xs"
          onClick={(e) => alert("Hello")}
        >
          Delete
        </button>
      ),
    },
  ];
  let data = [
    {
      id: 1,
      fk_ac: "Mahesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 2,
      fk_ac: "Nitesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 3,
      fk_ac: "Mahesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 4,
      fk_ac: "Rakesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 5,
      fk_ac: "Mahesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 6,
      fk_ac: "Sandeep 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 7,
      fk_ac: "Mahesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 8,
      fk_ac: "Mahesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 9,
      fk_ac: "Mahesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },

    {
      id: 10,
      fk_ac: "Mahesh 1234567890",
      prod_link: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)",
      cc_holderName: "Mahesh Yadav",
      cc_number: "3543234433",
      gc_amount: "1000",
      tx_amt: "344",
      final_price: "20000",
      gc_otp: "356443",
      purchase_otp: "123456",
      remark: "This product is purchase",
      purchase_start: "Thu, 05 Oct 2023 02:32:36 GMT",
      status: "Thu, 05 Oct 2023 02:32:36 GMT",
      action: '<span className="badge text-bg-danger">Delete</span>',
    },
  ];


export default function page() {
//   const [filterText, setFilterText] = React.useState("");
//   const [resetPaginationToggle, setResetPaginationToggle] =
//     React.useState(false);
//   // const filteredItems = fakeUsers.filter(
//   //   (item) =>
//   //     item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
//   // );

//   const subHeaderComponentMemo = React.useMemo(() => {
//     const handleClear = () => {
//       if (filterText) {
//         setResetPaginationToggle(!resetPaginationToggle);
//         setFilterText("");
//       }
//     };

//     return (
//       <FilterComponent
//         onFilter={(e) => setFilterText(e.target.value)}
//         onClear={handleClear}
//         filterText={filterText}
//       />
//     );
//   }, [filterText, resetPaginationToggle]);
  
  return (
    <>
      <section className="section dashboard">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <DataTable
                  title="Purchase in progress"
                  pagination
                  columns={columns}
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
