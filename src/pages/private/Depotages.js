import Header from "../../components/Header";
import DepotagesBox from "../../components/DepotagesBox";

const Depotages = () => {

    const KanbanBoxes = [
        {
            id: 1,
            title: "Planifier",
            name: "planifier"
        },
        {
            id: 0,
            title: "Encours",
            name: "encours"
        },
        {
            id: 2,
            title: "Terminées",
            name: "terminer"
        },
        {
            id: 3,
            title: "Sortie",
            name: "sortie"
        },
    ];


    return (
        <div>
            <Header title="Suivi de Dépotage" alpha_num="&HSUA-?YHW@O6" type="depotage"/>
            <div className="kanban-view-holder p-4">
                <div className="view-content">
                    <div className="row mb-5 mb-lg-4">
                        {
                            KanbanBoxes.map(box =>
                                <div key={box.id} className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                                    <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                        <div className="box-header text-center fw-bold fs-5 mb-2">
                                            {box.title}
                                        </div>
                                        <div className="box-body table-responsive">
                                            <table className="table">
                                                <thead>
                                                <tr className="table-header text-center">
                                                    <th>Quai</th>
                                                    <th>Matricule</th>
                                                    <th>Correspondant</th>
                                                    <th>Dépotage</th>
                                                </tr>
                                                </thead>
                                                <DepotagesBox
                                                    name={box.name}
                                                />
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Depotages;