export default function CanvaEditorPopup() {
  const designUrl =
    "https://www.canva.com/design/DAGjkyuIaEs/u0hRRwtmCimhHnrdw5K4BQ/edit";

  const openCanvaPopup = () => {
    window.open(designUrl, "_blank", "width=1200,height=800");
  };

  return (
    <>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    <button onClick={openCanvaPopup} style={{ padding: "10px", fontSize: "16px" }}>
      Open Canva Editor
    </button>
    </div>
    
   </>
  );
}
