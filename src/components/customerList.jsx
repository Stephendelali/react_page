const CustomerList = (props) => {
    return (
      <div>
        <p>{props.name} {props.BillingDate}  {props.Plan} {props.Amount} {props.Total_Users} {props.Details}</p>
       
      </div>
    );
  };
  
  export default CustomerList;
  