import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./reducers/ui-slice";

const styles = {
  main: {
    backgroundColor: "rgba(137, 146, 163, 0.5)",
    zIndex: 16000000,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "scroll",
    justifyContent: "center",
    alignItems: "center",

    bgcolor: "#FFFFFF",
  },
  messageBox: {
    backgroundColor: "white",
    borderRadius: "24px",
    // width: "591px",
    overflow: "auto",
    textAlign: "center",
    position: "relative",
  },
};

export default function Modal() {
  const dispatch = useDispatch();
  const modalOpened = useSelector(state => state.ui.modal);
  const modalContent = useSelector(state => state.ui.modalContent);

  const Close = e => {
    e.preventDefault();
    dispatch(closeModal());
  };
  return (
    <>
      {modalOpened ? (
        <div
          style={{
            ...styles.main,
            left: 0,
            zIndex: 160000000,
          }}
          onClick={e => Close(e)}
        >
          <div style={{ ...styles.messageBox }}>
            <div
              onClick={e => {
                e.stopPropagation();
              }}
              style={{ marginTop: "0px", backgroundColor: "white" }}
            >
              {modalContent}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
