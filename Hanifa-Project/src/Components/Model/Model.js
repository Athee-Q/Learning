import React from 'react'
import { useNavigate } from 'react-router-dom';
const Model = () => {
  const navigation = useNavigate();
  const handleSubmit = () => {
    localStorage.removeItem("Role");
    localStorage.removeItem("user");
    localStorage.removeItem("accountId");
    localStorage.removeItem("userDetail");
    localStorage.removeItem("teacherId");
    localStorage.removeItem("studentId");
    window.location.href='../';
  };
  return (
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="logoutModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="logoutModalCenterTitle">Ready to Leave?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session. </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={handleSubmit}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Model;
