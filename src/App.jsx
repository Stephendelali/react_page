import './App.css'
import logo from './assets/logo.png';
import Avatar from './assets/Avatar.jpg';
import notification from './assets/notification.png';
import customers from './assets/customers.png';
import flag from './assets/flag.png';
import calender from './assets/calender.png';
import team from './assets/team.jpg';
import plan from './assets/plan.png';
import person from './assets/person.png';
import funnel from './assets/funnel.png';
import search from './assets/search.png';





function App() {
  const customer=[
    {name:"John Terry",BillingDate:"June, 12 2023", Plan:"Team", Amount:"16,000USD", Total_Users:21, Details:"View details"},
    {name:"Perry Doe",BillingDate:"June, 2 2023", Plan:"Team", Amount:"7,000USD", Total_Users:5, Details:"View details"},
    {name:"Stephen Jay",BillingDate:"June, 15 2023", Plan:"Team", Amount:"90,000USD", Total_Users:34, Details:"View details"},
    {name:"Ben Boateng",BillingDate:"July, 1 2023", Plan:"Team", Amount:"12,000USD", Total_Users:10, Details:"View details"},
    {name:"Delali Kuma",BillingDate:"July, 1 2023", Plan:"Team", Amount:"1,000USD", Total_Users:2, Details:"View details"},
    {name:"Kofi Ajei",BillingDate:"July, 7 2023", Plan:"Team", Amount:"69,000USD", Total_Users:2, Details:"View details"},

  ];

  return (
    <>
    {/* notification area */}
    <div  className='flex items-start justify-between p-4 bg-gray-800 text-white rounded h-12 align-middle'>
      <div className='flex items-start ' >
      <img src={logo} class="w-7 h-7 rounded-full "/>
        <h1 className='text-white text-start font-semibold'>ORGANIZED</h1>
    </div>

    <div className='flex items-start justify-center '>
        <input type="search" className='bg-gray-700 text-white rounded p-0 px-4 'placeholder='search ...'/>
      {/* <button class="ml-4 bg-red-500 text-white py-2 px-4 rounded">Add Customer</button>       */}
      </div>
      <div className='flex space-x-2'> 
      <img src={notification} className='w-4 h-4 rounded-full 	' /> 
      <img src={Avatar} className='w-7 h-7 rounded-full' />
      </div>
    </div>
  <div className='flex justify-between items-center px-6 py-4 bg-white border-b-2'>
    <div className='flex space-x-6'>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Dashboard</a>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Customer</a>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Statistics</a>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Review</a>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Settings</a>
  </div>
  <div className='inline-block'>
    <button className='flex items-center px-3 py-2 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200'>
    <img
      src={flag} className='w-5 h-5 rounded-full mr-2'/>
    <span className='text-gray-700 text-sm mr-1'>EN</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className='h-4 w-4 text-gray-700'
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
    </button>
    </div>
  </div>

  {/* Customer Section */}
  <div className='flex items-center justify-between '>
    <h1 className='font-semibold text-3xl p-4'>Customer</h1>
    <div className=' rounded space-x-2 items-center'>
    <button class=" hover:bg-slate-200 py-1 px-1 rounded inline-flex items-center border space-y-3">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  </button>
  <button class="border hover:bg-gray-200 text-gray-800 font-bold py-1 px-1 rounded inline-flex items-center">
  <span className='font-mono text-sm'>June,22 2023</span>
  <img src={calender} className='w-3 h-3'/>
  </button>
  <button class="border bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-1 px-1 rounded inline-flex items-center">
  <span className='font-semibold text-sm'>Add Customer +</span>
  </button>
    </div>
  </div>

{/* Stats Section */}
  <div className='grid grid-cols-4 gap-4 p-9  bg-gray-50 item-center'>
    <div className='bg-white p-4 rounded-lg shadow w-70 items-center border'>
    <div className='flex items-center justify-start border-b-2 space-x-1'>
    <img src={customers} className='h-4 w-4'/>
    <p className='text-gray-600 font-semibold'>Total Customer</p>
    </div>  
  <h2 className='text-xl font-semibold'>470 </h2>
  <div className='flex justify-center space-x-1'>
    <button className='text-green-600 font-semibold text-xs border bg-green-100 border-b-2 rounded hover:bg-green-300 shadow-sm'>
      +3.90%
    </button>
    <p className='text-slate-700 text-xs'>from last week</p>
  </div>
  </div>

  <div className='bg-white p-4 rounded-lg shadow w-70 items-center'>
    <div className='flex items-center justify-start border-b-2 space-x-1'>
    <img src={team} className='h-4 w-4'/>
    <p className='text-gray-600 font-semibold'>Team Plan</p>
  </div>  
  <h2 className='text-xl font-semibold'>130 </h2>
  <div className='flex justify-center space-x-1'>
    <button className='text-green-600 font-semibold text-xs border bg-green-100 border-b-2 rounded hover:bg-green-300 shadow-sm'>
      +1.90%
    </button>
    <p className='text-slate-700 text-xs'>from last week</p>
  </div>
  </div>

  <div className='bg-white p-4 rounded-lg shadow w-70 items-center'>
    <div className='flex items-center justify-start border-b-2 space-x-1'>
    <img src={plan} className='h-4 w-4'/>
    <p className='text-gray-600 font-semibold'>Basic Plan</p>
    </div>  
  <h2 className='text-xl font-semibold'>56 </h2>
  <div className='flex justify-center space-x-1'>
    <button className='text-green-600 font-semibold text-xs border bg-green-100 border-b-2 rounded hover:bg-green-300 shadow-sm'>
      +64.90%
    </button>
    <p className='text-slate-700 text-xs'>from last week</p>
  </div>
  </div>

  <div className='bg-white p-2 rounded-lg shadow w-70 items-center'>
    <div className='flex items-center justify-start border-b-2 space-x-1 p-1'>
      <img src={person} className='h-4 w-4'/>
      <p className='text-gray-600 font-semibold'>Pelangan Bertti</p>
    </div>  
  <h2 className='text-xl font-semibold'>4 </h2>
    <div className='flex justify-center space-x-1'>
      <button className='text-red-500 font-semibold text-xs border bg-red-100 border-b-2 rounded hover:bg-red-400 shadow-sm'>
      -2.10%
      </button>
      <p className='text-slate-700 text-xs'>from last week</p>
    </div>
 </div>
</div>

{/* Filter and Search Bar */}
<div className='border rounded'> 
<div className='flex justify-between items-center p-4 bg-white'>
  <p className='text-xl font-semibold'>Customer List</p>
  <div className='flex space-x-4 font-serif '>
    <button className='bg-white text-xs py-0 px-2 rounded border-2 h-8  hover:text-slate-400'>
      All time</button>
    <button className='bg-white text-xs  py-0 px-2 rounded border-2 h-8  hover:text-slate-400'>
      Team Plan</button>
    <button className='bg-white text-xs  py-0 px-2 rounded border-2 h-8  hover:text-slate-400'>
      Active</button>
    <button className='flex items-center justify-start bg-white text-xs space-x-6 py-0 px-2 rounded border-2 h-8  hover:text-slate-400'>
      <img src={funnel} className='w-3 h-3 mr-2 hover:bg-slate-400'/>
      More filters
      </button>
      <span className='flex items-center justify-start bg-white text-xs space-x-6 py-0 px-2 rounded border-2 h-8 hover:text-slate-400'>
      <img src={search} className='w=3 h-3 mr-2'/>
      search ...
      </span>
  </div>
</div>

{/* Customer List table */}
<div className="overflow-x-auto">
  <table className="min-w-full table-auto bg-white rounded-lg shadow border">
    <thead className="border text-gray-600 font-medium text-sm">
      <tr className='mr-4'>
        <th className="px-4 py-2 ">Full Name</th>
        <th className="px-4 py-2 ">Billing Date</th>
        <th className="px-4 py-2 ">Plan</th>
        <th className="px-4 py-2 ">Amount</th>
        <th className="px-4 py-2 ">Total Users</th>
        <th className="px-4 py-2 ">Details</th>
      </tr>
    </thead>
    <tbody>
      {customer.map((customer, key) => (
        <tr key={key} className=" font-serif text-sm">
          <td className="px-4 py-2">{customer.name}</td>
          <td className="px-4 py-2">{customer.BillingDate}</td>
          <td className="">{customer.Plan}</td>
          <td className="px-4 py-2">{customer.Amount}</td>
          <td className="px-4 py-2">{customer.Total_Users}</td>
          <td className="px-4 py-2 text-blue-400 underline">
            <button className='hover:text-blue-500 hover:border-b-1'>
            {customer.Details}
            </button>
            </td>
          <td className="px-4 py-2">....</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


<div class="flex justify-between items-center p-4 bg-white text-xs">
  <div class="flex items-center space-x-2 text-xs font-semibold">
    <span>Result per page:</span>
    <select class="border rounded py-1 px-2 bg-gray-100">
      <option>6</option>
      <option>12</option>
      <option>24</option>
    </select>
  </div>
  <div class="flex space-x-2 text-xs  bg-white font-semibold ">
    <button class="bg-white border px-5 h-6 rounded hover:bg-slate-200">Previous</button>
    <button class="bg-white border rounded w-6 h-6 hover:bg-slate-200">1</button>
    <button class="bg-red-500 text-white border w-6 h-6 rounded hover:bg-slate-200">2</button>
    <button class="bg-white  border w-6 h-6 rounded hover:bg-slate-200">3</button>
    <button class="bg-white  border w-6 h-6 rounded hover:bg-slate-200">...</button>
    <button class="bg-white border px-4 h-6 rounded hover:bg-slate-200">Next</button>
  </div>
</div>

</div>

    </>
  )
}

export default App
