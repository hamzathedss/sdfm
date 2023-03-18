import Header from "../../components/Header";
import ExpeditionsPlanifier from "../../components/ExpeditionsPlanifier";
import ExpeditionsEncours from "../../components/ExpeditionsEncours";
import ExpeditionsExpedier from "../../components/ExpeditionsExpedier";
import ExpeditionsSortie from "../../components/ExpeditionsSortie";

const Expeditions = () => {

    return (
        <div>
            <Header title="Suivi d'Expédition" alpha_num="GWT62-UJSA&M%" type="expedition"/>
            <div className="kanban-view-holder p-4">
                <div className="view-content">
                    <div className="row mb-5 mb-lg-4">
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">Planifier</div>
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
                                        <ExpeditionsPlanifier/>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">Encours</div>
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
                                        <ExpeditionsEncours/>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">Expedier</div>
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
                                        <ExpeditionsExpedier/>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">Sortie</div>
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
                                        <ExpeditionsSortie/>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expeditions;