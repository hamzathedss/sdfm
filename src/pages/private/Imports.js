import Header from "../../components/Header";
import Pusher from "pusher-js";
import ImportsEncours from "../../components/ImportsEncours";
// import ImportsEnroute from "../../components/ImportsEnroute";
import ImportsEnparc from "../../components/ImportsEnparc";
import ImportsProgrammes from "../../components/ImportsProgrammes";

const Imports = () => {
    Pusher.logToConsole = false;

    let pusher = new Pusher('5fdf984542cc12f08fb0', {
        cluster: 'eu'
    });
    let channel = pusher.subscribe('sdfm-channel');
    channel.bind('sdfm-depotage-reload', function (data) {
        if (data.data === 'new record') {
            window.location.reload();
        }
    });

    return (
        <div>
            <Header title="Suivi de Dépotage" type="depotage"/>
            <div className="kanban-view-holder p-4">
                <div className="view-content">
                    <div className="row mb-5 mb-lg-4">
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">En cours</div>
                                <div className="box-body table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr className="table-header text-center">
                                            <th>Dum</th>
                                            <th>Matricule</th>
                                            <th>Correspondant</th>
                                            <th>Dépotage</th>
                                        </tr>
                                        </thead>
                                        <ImportsEncours/>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">En route</div>
                                <div className="box-body table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr className="table-header text-center">
                                            <th>Dum</th>
                                            <th>Matricule</th>
                                            <th>Correspondant</th>
                                            <th>Dépotage</th>
                                        </tr>
                                        </thead>
                                        {/*<ImportsEnroute/>*/}
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">En parc</div>
                                <div className="box-body table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr className="table-header text-center">
                                            <th>Dum</th>
                                            <th>Matricule</th>
                                            <th>Correspondant</th>
                                            <th>Dépotage</th>
                                        </tr>
                                        </thead>
                                        <ImportsEnparc/>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-4 col-xxl-3 mb-3 px-1">
                            <div className="kanban-content bg-white px-2 py-3 rounded-4">
                                <div className="box-header text-center fw-bold fs-5 mb-2">Programmer</div>
                                <div className="box-body table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr className="table-header text-center">
                                            <th>Dum</th>
                                            <th>Matricule</th>
                                            <th>Correspondant</th>
                                            <th>Dépotage</th>
                                        </tr>
                                        </thead>
                                        <ImportsProgrammes/>
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

export default Imports;