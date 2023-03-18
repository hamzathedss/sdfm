import Header from "../../components/Header";
import DepotagesEncours from "../../components/DepotagesEncours";
import DepotagesPlanifier from "../../components/DepotagesPlanifier";
import DepotagesTerminees from "../../components/DepotagesTerminees";
import DepotagesSortie from "../../components/DepotagesSortie";

const Depotages = () => {
    return (
        <div>
            <Header title="Suivi de Dépotage" alpha_num="&HSUA-?YHW@O6" type="depotage"/>
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
                                            <th>Quai</th>
                                            <th>Matricule</th>
                                            <th>Correspondant</th>
                                            <th>Dépotage</th>
                                        </tr>
                                        </thead>
                                        <DepotagesPlanifier/>
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
                                            <th>Quai</th>
                                            <th>Matricule</th>
                                            <th>Correspondant</th>
                                            <th>Dépotage</th>
                                        </tr>
                                        </thead>
                                        <DepotagesEncours/>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">Terminées</div>
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
                                        <DepotagesTerminees/>
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
                                            <th>Quai</th>
                                            <th>Matricule</th>
                                            <th>Correspondant</th>
                                            <th>Dépotage</th>
                                        </tr>
                                        </thead>
                                        <DepotagesSortie/>
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

export default Depotages;