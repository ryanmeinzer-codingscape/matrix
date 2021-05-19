import {DataGrid} from '@material-ui/data-grid'

const columns = [
    {
        field: 'id',
        hide: true,
    },
    {
        field: 'valueTitle',
        headerName: ' ',
        type: 'string',
        sortable: 'false',
        flex: 1
    },
    {
        field: 'internalLabs',
        headerName: 'Internal Labs $$$$$',
        type: 'boolean',
        flex: 1
    },
    {
        field: 'largeConsultancies',
        headerName: 'Large Consultancies $$$$',
        type: 'boolean',
        flex: 1
    },
    {
        field: 'codingscape',
        headerName: 'Codingscape $$$',
        type: 'boolean',
        flex: 1
    },
    {
        field: 'nearshoreFirms',
        headerName: 'Nearshore Firms $$',
        type: 'boolean',
        flex: 1
    },
    {
        field: 'offshoreFirms',
        headerName: 'Offshore Firms $',
        type: 'boolean',
        flex: 1
    }
]

const rows = [
    {
        id: 1,
        valueTitle: 'Quality Software',
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 2,
        valueTitle: 'Fast',
        internalLabs: true,
        largeConsultancies: false,
        codingscape: true,
        nearshoreFirms: true,
        offshoreFirms: false
    },
    {
        id: 3,
        valueTitle: 'Cheap',
        internalLabs: false,
        largeConsultancies: false,
        codingscape: false,
        nearshoreFirms: true,
        offshoreFirms: true
    },
    {
        id: 4,
        valueTitle: 'Senior Software Engineers',
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 5,
        valueTitle: 'Remote First',
        internalLabs: false,
        largeConsultancies: false,
        codingscape: true,
        nearshoreFirms: true,
        offshoreFirms: true
    },
    {
        id: 6,
        valueTitle: 'Direct Access to Engineers',
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 7,
        valueTitle: 'USA Based Team and Working Hours',
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 8,
        valueTitle: 'Technology Match',
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: true,
        offshoreFirms: false
    },
    {
        id: 9,
        valueTitle: 'Enterprise-Grade',
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 10,
        valueTitle: 'Data Security and Privacy',
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
]

const AppContainer = () => {
    return (
        <div style={{display: 'flex', height: '100vh'}}>
            <div style={{flexGrow: 1}}>
                <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
            </div>
        </div>
    )
}

export default AppContainer