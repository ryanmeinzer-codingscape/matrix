import {DataGrid} from '@material-ui/data-grid'
import Tooltip from '@material-ui/core/Tooltip'

const columns = [
    {
        field: 'id',
        hide: true,
    },
    {
        field: 'valueTitle',
        headerName: ' ',
        sortable: 'false',
        flex: 1,
        renderCell: (params) => (
            <Tooltip title={params.row.valueDescription}>
                <span>{params.value}</span>
            </Tooltip>
        )
    },
    {
        field: 'internalLabs',
        headerName: 'Internal Labs $$$$$',
        type: 'boolean',
        flex: 1,
        description: "Internal Technology Labs come with the cost of staffing an entire engineering and design team in house outside of your normal engineering internal organization."
    },
    {
        field: 'largeConsultancies',
        headerName: 'Large Consultancies $$$$',
        type: 'boolean',
        flex: 1,
        description: "International Consultancies that have minimum contract sizes for multi year duration contracts. Quality can be high but price can be out of reach for most customers."
    },
    {
        field: 'codingscape',
        headerName: 'Codingscape $$$',
        type: 'boolean',
        flex: 1,
        description: "Codingscape is the right balance of high-quality software development with the agility to meet tight deadlines at the market rate price to work with Senior American Software Engineers."
    },
    {
        field: 'nearshoreFirms',
        headerName: 'Nearshore Firms $$',
        type: 'boolean',
        flex: 1,
        description: "Nearshore Firms specialize in having American Sales people that then repackage contracts for foreign developers. Communication can be better than offshore firms but often quality still suffers with language and timezone barriers."
    },
    {
        field: 'offshoreFirms',
        headerName: 'Offshore Firms $',
        type: 'boolean',
        flex: 1,
        description: "Offshore Firms are cheap but their benefits end there. Quality, communication, and meeting deadlines within originally quoted budgets are all problems with Offshore Firms."
    }
]

const rows = [
    {
        id: 1,
        valueTitle: 'Quality Software',
        valueDescription: "Doing quality work is hard. Finding quality developers is difficult. Codingscape's USA based developers are experts at providing high quality development and excellent communication.",
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 2,
        valueTitle: 'Fast',
        valueDescription: "Hitting deadlines is vital to any business. Software projects need to be on time and on budget - Codingscape prides ourselves on hitting the deadlines we agree to and getting started on projects fast.",
        internalLabs: true,
        largeConsultancies: false,
        codingscape: true,
        nearshoreFirms: true,
        offshoreFirms: false
    },
    {
        id: 3,
        valueTitle: 'Cheap',
        valueDescription: "Software development can be a complicated and expensive endeavor. As with most services, you get what you pay for.With Codingscape you're paying for American Engineers in your Time Zone that are expert level contributors and excellent communicators. We are more expensive than foreign firms and we're more than worth the extra budget.Do the project once, do it right, and you'll be happy you picked this path the first time.",
        internalLabs: false,
        largeConsultancies: false,
        codingscape: false,
        nearshoreFirms: true,
        offshoreFirms: true
    },
    {
        id: 4,
        valueTitle: 'Senior Software Engineers',
        valueDescription: "Working with varied skill level engineers gives varied results. Codingscape matches you with our team of senior engineers that can take projects from start to finish with high quality results.",
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 5,
        valueTitle: 'Remote First',
        valueDescription: "Hiring efficient software collaborators is hard. Codingscape's team are experts at remote and asynchronous communication. We believe in strong communication which is the backbone for successful contributions from remote teams.",
        internalLabs: false,
        largeConsultancies: false,
        codingscape: true,
        nearshoreFirms: true,
        offshoreFirms: true
    },
    {
        id: 6,
        valueTitle: 'Direct Access to Engineers',
        valueDescription: "Codingscape gives you direct access to the engineers working on your project thereby creating accountability and communication to achieve successful results. Working with other firms, you're often unable to communicate directly with the engineers on the project.",
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 7,
        valueTitle: 'USA Based Team and Working Hours',
        valueDescription: "Collaborating in foreign languages and different time zones is hard. Codingscape works in your time zone with American engineers. Our team will work with you as well or better than your internal team.",
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 8,
        valueTitle: 'Technology Match',
        valueDescription: "Finding development talent in the software language that you organization uses can be difficult. Codingscape will match your project to a senior engineer that is an expert in the language it is written in and will provide scalable code that works well long after our engagement is over.",
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: true,
        offshoreFirms: false
    },
    {
        id: 9,
        valueTitle: 'Enterprise-Grade',
        valueDescription: "Codingscape works with some of the largest tech companies in the world. We are experts at working on legacy systems and integrating new technology into organizations.",
        internalLabs: true,
        largeConsultancies: true,
        codingscape: true,
        nearshoreFirms: false,
        offshoreFirms: false
    },
    {
        id: 10,
        valueTitle: 'Data Security and Privacy',
        valueDescription: "Codingscape works with some of the largest tech companies in the world and adhere to the utmost data and security standards in collaboration with our clients. We can adhere to any data and privacy rulesets that your organization may have.",
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