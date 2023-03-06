import Header from "../../components/Header";
import ExpeditionsBox from "../../components/ExpeditionsBox";

const Expeditions = () => {

    const KanbanBoxes = [
        {
            id: 0,
            title: "Encours",
            name: "encours"
        },
        {
            id: 1,
            title: "Planifier",
            name: "planifier"
        },
        {
            id: 2,
            title: "Expedier",
            name: "expedier"
        },
        {
            id: 3,
            title: "Sortie",
            name: "sortie"
        },
    ]

    return (
        <div>
            <Header title="Expeditions"/>
            <div className="kanban-view-holder p-4">
                <div className="view-content">
                    <div className="row">
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
                                                    <th>N°Pik order</th>
                                                    <th>Matricule</th>
                                                    <th>Correspondant</th>
                                                    <th>Quai</th>
                                                </tr>
                                                </thead>
                                                <ExpeditionsBox
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

export default Expeditions;