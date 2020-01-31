import React from 'react'
import {connect} from 'react-redux'

// class AllAlgos extends React.Component {

//   componentDidMount() {

//   }

//   clickHandler(id) {

//   }

//   render(){
//     return (
//       <div>
//       <h1>All Algos</h1>
//       <div>
//       </div>
//       <div>
//         {this.props.campuses.map( (campus) => {
//           return(
//             <ul key ={campus.id}>
//                 <Link to= {`/campuses/${campus.id}`}>
//                 <li><img src = {campus.imageUrl} height='100'/>{campus.name}</li>
//                 </Link>
//             </ul>
//           )
//         })}
//       </div>
//       </div>
//     )}
//   }

//   const mapStateToProps = (state) =>{
//     return {
//       campuses: state.allCampuses
//     }
//   }

//   const mapDispatchToProps = function (dispatch) {
//     return {
//       onLoadCampuses: function () {
//         dispatch(getCampuses());
//       },
//       onDeleteCampus: (id) => {
//         dispatch(deleteCampus(id))
//       }
//     };
//   };

//   const ConnectedCampuses = connect(mapStateToProps, mapDispatchToProps)(AllCampuses)

//   export default ConnectedCampuses
