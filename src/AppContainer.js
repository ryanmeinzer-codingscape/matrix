import {
    DataGrid,
    GridToolbarContainer,
    GridColumnsToolbarButton,
    GridFilterToolbarButton,
    GridToolbarExport
} from '@material-ui/data-grid'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom';
import {withStyles, makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Leawood from './fonts/7eda0ba7-1b89-4610-b7d3-562b9ad4156a.woff2'
import LoRes from './fonts/lores12ot-reg-webfont.woff2'

const isDarkTheme = false

const lores = {
    fontFamily: 'lores12ot-reg',
    src: `url(${LoRes}) format('woff2')`,
    fontWeight: 'normal',
    fontStyle: 'normal'
}

const headerTitle = createMuiTheme({
    typography: {
        fontFamily: 'lores12ot-reg'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [lores],
            },
        },
    },
})

const leawood = {
    fontFamily: 'ITC Leawood W01 Book',
    src: `url(${Leawood}) format('woff2')`,
    fontWeight: 'normal',
    fontStyle: 'normal'
}


const theme = createMuiTheme({
    typography: {
        fontFamily: 'ITC Leawood W01 Book',
        fontSize: 20
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [leawood]
            },
        }
    }
})

let backgroundDetector = () => {
    if (isDarkTheme) {
        return '#000000'
    } else {
        return '#F9F5EC'
    }
}

let backgroundColorDetector = () => {
    if (isDarkTheme) {
        return '#ffffff'
    } else {
        return '#2B2424'
    }
}

let colorDetector = () => {
    if (isDarkTheme) {
        return '#000000'
    } else {
        return '#ffffff'
    }
}

const useStyles = makeStyles({
    root: {
        background: backgroundDetector,
        border: 0,
        color: backgroundColorDetector,
        cursor: 'pointer',
        '& .MuiDataGrid-row': {
            borderTop: 0,
            borderBottom: '1px solid #FF4844',
            borderLeft: 0,
            borderRight: 0
        },
        '& .MuiDataGrid-columnsContainer': {
            borderBottom: '1px solid #FF4844'
        },
        '& .MuiDataGrid-cell': {
            border: 0
        },
        '& .MuiDataGrid-iconSeparator': {
            color: isDarkTheme ? '#ffffff' : '#2B2424'
        },
        '& .Codingscape-column': {
            borderLeft: isDarkTheme ? '3px solid #ffffff' : '3px solid #2B2424',
            borderRight: isDarkTheme ? '3px solid #ffffff' : '3px solid #2B2424',
            margin: '0 0 0 -4px'
        }
    }
})

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: backgroundColorDetector,
        color: colorDetector,
        boxShadow: theme.shadows[8],
        fontSize: 16,
    },
}))(Tooltip);

const columns = [
    {
        field: 'id',
        hide: true,
    },
    {
        field: 'valueTitle',
        headerName: ' ',
        sortable: false,
        disableColumnSelector: true,
        flex: 1.4,
        renderCell: (params) => (
            <LightTooltip className={'root'} title={params.row.valueTitleDescription} TransitionComponent={Zoom}>
                <span>{params.value}</span>
            </LightTooltip>
        )
    },
    {
        field: 'internalLabs',
        headerName: 'Internal Labs $$$$$',
        description:
            <div style={{
                background: isDarkTheme ? '#ffffff' : '#2B2424', color: isDarkTheme ? '#000000' : '#ffffff', fontSize: 16, margin: '-10px', padding: '8px', borderRadius: 5}}>Internal Technology Labs come with the cost of staffing an entire engineering and design team in house outside of your normal engineering internal organization.</div>,
        sortable: false,
        flex: 1.1,
        type: 'boolean',
        renderCell: (params) => (
            <LightTooltip title={params.row.internalLabsDescription} TransitionComponent={Zoom}>
                <span className={'material-icons'}>{params.value ? 'check_box' : 'check_box_outline_blank'}</span>
            </LightTooltip>
        ),
        // hide: true
    },
    {
        field: 'largeConsultancies',
        headerName: 'Large Consultancies $$$$',
        description:
            <div style={{
                background: isDarkTheme ? '#ffffff' : '#2B2424', color: isDarkTheme ? '#000000' : '#ffffff', fontSize: 16, margin: '-10px', padding: '8px', borderRadius: 5
            }}>International Consultancies that have minimum contract sizes for multi year duration contracts. Quality can be high but price can be out of reach for most customers.</div>,
        sortable: false,
        flex: 1.4,
        type: 'boolean',
        renderCell: (params) => (
            <LightTooltip title={params.row.largeConsultanciesDescription} TransitionComponent={Zoom}>
                <span className={'material-icons'}>{params.value ? 'check_box' : 'check_box_outline_blank'}</span>
            </LightTooltip>
        ),
        // hide: true
    },
    {
        field: 'codingscape',
        headerName: <span style={{fontWeight: 'bold'}}>Codingscape $$$</span>,
        cellClassName: 'Codingscape-column',
        description:
            <div style={{
                background: isDarkTheme ? '#ffffff' : '#2B2424', color: isDarkTheme ? '#000000' : '#ffffff', fontSize: 16, margin: '-10px', padding: '8px', borderRadius: 5
            }}>Codingscape is the right balance of high-quality software development with the agility to meet tight deadlines at the market rate price to work with Senior American Software Engineers.</div>,
        sortable: false,
        flex: 1,
        type: 'boolean',
        renderCell: (params) => (
            <LightTooltip title={params.row.codingscapeDescription} TransitionComponent={Zoom}>
                <span className={'material-icons'}>{params.value ? 'check_box' : 'check_box_outline_blank'}</span>
            </LightTooltip>
        )
    },
    {
        field: 'nearshoreFirms',
        headerName: 'Nearshore Firms $$',
        description:
            <div style={{
                background: isDarkTheme ? '#ffffff' : '#2B2424', color: isDarkTheme ? '#000000' : '#ffffff', fontSize: 16, margin: '-10px', padding: '8px', borderRadius: 5
            }}>Nearshore Firms specialize in having American Sales people that then repackage contracts for foreign developers. Communication can be better than offshore firms but often quality still suffers with language and timezone barriers.</div>,
        sortable: false,
        flex: 1.1,
        type: 'boolean',
        renderCell: (params) => (
            <LightTooltip title={params.row.nearshoreFirmsDescription} TransitionComponent={Zoom}>
                <span className={'material-icons'}>{params.value ? 'check_box' : 'check_box_outline_blank'}</span>
            </LightTooltip>
        ),
        // hide: true
    },
    {
        field: 'offshoreFirms',
        headerName: 'Offshore Firms $',
        description:
            <div style={{
                background: isDarkTheme ? '#ffffff' : '#2B2424', color: isDarkTheme ? '#000000' : '#ffffff', fontSize: 16, margin: '-10px', padding: '8px', borderRadius: 5
            }}>Offshore Firms are cheap but their benefits end there. Quality, communication, and meeting deadlines within originally quoted budgets are all problems with Offshore Firms.</div>,
        sortable: false,
        flex: 1,
        type: 'boolean',
        renderCell: (params) => (
            <LightTooltip title={params.row.offshoreFirmsDescription} TransitionComponent={Zoom}>
                <span className={'material-icons'}>{params.value ? 'check_box' : 'check_box_outline_blank'}</span>
            </LightTooltip>
        ),
        // hide: true
    }
]

const rows = [
    {
        id: 1,
        valueTitle: 'Quality Software',
        valueTitleDescription: "Doing quality work is hard. Finding quality developers is difficult. Codingscape's USA based developers are experts at providing high quality development and excellent communication.",
        internalLabs: true,
        internalLabsDescription: "Large companies often have Lab teams to work on special projects. This is an effective quality strategy for custom software projects but comes at a high cost. Out of reach for all but the largest organizations.",
        largeConsultancies: true,
        largeConsultanciesDescription: "Large consulting firms are highly profitable for a reason, they charge A LOT for their expertise and long contract durations.",
        codingscape: true,
        codingscapeDescription: "Codingscape specializes in high quality services via our team of American Senior Software Engineers who all have a decade+ experience working with large technology companies.",
        nearshoreFirms: false,
        nearshoreFirmsDescription: "Quality can suffer with language barriers and disconnects between the sales team and the engineering teams.",
        offshoreFirms: false,
        offshoreFirmsDescription: "Quality almost always suffers with timezone and language barriers."
    },
    {
        id: 2,
        valueTitle: 'Fast',
        valueTitleDescription: "Hitting deadlines is vital to any business. Software projects need to be on time and on budget - Codingscape prides ourselves on hitting the deadlines we agree to and getting started on projects fast.",
        internalLabs: true,
        internalLabsDescription: "Internal labs can move fast once they are setup and operating. Internal labs are often created because the normal engineering organization can't move fast enough.",
        largeConsultancies: false,
        largeConsultanciesDescription: "Large Consultancies are not generally a speedy option. They specialize in multi year engagements and it takes a lot of time for their work to come together. There is often a lot of red tape and contractual obligations that slow down the actual start of work.",
        codingscape: true,
        codingscapeDescription: "Codingscape specializes in hitting deadlines on budget. We're a medium sized, agile team that can get started quickly.",
        nearshoreFirms: true,
        nearshoreFirmsDescription: "Similar to Large Consultancies, Nearshore Firms are not generally a speedy option. They take a long time to start work and spin up resources, there can be a lot of red tape, and redline contracts on both sides.",
        offshoreFirms: false,
        offshoreFirmsDescription: "Offshore Firms can often start work fast, but communication and iteration is difficult with time zone and language difficulties."
    },
    {
        id: 3,
        valueTitle: 'Cheap',
        valueTitleDescription: "Software development can be a complicated and expensive endeavor. As with most services, you get what you pay for.With Codingscape you're paying for American Engineers in your Time Zone that are expert level contributors and excellent communicators. We are more expensive than foreign firms and we're more than worth the extra budget.Do the project once, do it right, and you'll be happy you picked this path the first time.",
        internalLabs: false,
        internalLabsDescription: "Internal teams are expensive: a new office, a new technology team on top of your existing organization, and it takes time to create these new resources.",
        largeConsultancies: false,
        largeConsultanciesDescription: "Large consulting firms are highly profitable for a reason, they charge A LOT for their expertise and long contract durations.",
        codingscape: false,
        codingscapeDescription: "Codingscape providers American Senior Engineers at market rates. Almost all of our fees are passed on to our team members. We believe our pricing is the right balance to get top tier quality without working with a huge consulting firm.",
        nearshoreFirms: true,
        nearshoreFirmsDescription: "Nearshore Firms sell on a project basis with American sales people, and then ship the contract to a foreign development shop to increase their margins. Prices go down with foreign developers but so does communication. It's very common for these fixed price contracts to win the bid process and then once work starts have the fixed price expand to double or triple the original cost.",
        offshoreFirms: true,
        offshoreFirmsDescription: "Offshore firms specialize in cheap talent. Low expense foreign development, but as the age old proverb says, you get what you pay for. It's very common for these fixed price contracts to win the bid process and then once work starts have the fixed price expand to double or triple the original cost."
    },
    {
        id: 4,
        valueTitle: 'Senior Software Engineers',
        valueTitleDescription: "Working with varied skill level engineers gives varied results. Codingscape matches you with our team of senior engineers that can take projects from start to finish with high quality results.",
        internalLabs: true,
        internalLabsDescription: '',
        largeConsultancies: true,
        largeConsultanciesDescription: "Long contract durations, upside fees, and expensive firms make this an expensive option for access to senior engineers",
        codingscape: true,
        codingscapeDescription: "We only work with Senior Engineers - people that can lead projects, take a feature from front to back end development, and are excellent communicators.",
        nearshoreFirms: false,
        nearshoreFirmsDescription: "Nearshore firms often sell Senior resources and staff them with Junior developers who are not able to take a software feature from start to finish.",
        offshoreFirms: false,
        offshoreFirmsDescription: "Offshore firms often sell you a Senior Resources and staff them with Junior developers who are not able to take a feature from start to finish."
    },
    {
        id: 5,
        valueTitle: 'Remote First',
        valueTitleDescription: "Hiring efficient software collaborators is hard. Codingscape's team are experts at remote and asynchronous communication. We believe in strong communication which is the backbone for successful contributions from remote teams.",
        internalLabs: false,
        internalLabsDescription: "Most internal labs might have gone remote for Covid, but they aren't experts at it and will struggle managing their expensive lab remote.",
        largeConsultancies: false,
        largeConsultanciesDescription: "Big consultancies specialize in placing their team at your office. They aren't good at working remote.",
        codingscape: true,
        codingscapeDescription: "Codingscape has always been a remote organization, we started that way years ago and have used this speciality to improve our clients remote habits during the COVID pandemic.",
        nearshoreFirms: true,
        nearshoreFirmsDescription: "Nearshore firms are better at working remote than most, however they often have language barriers that make effective collaboration difficult.",
        offshoreFirms: true,
        offshoreFirmsDescription: "Offshore firms are remote first, but communication is often difficult with language and time zone issues."
    },
    {
        id: 6,
        valueTitle: 'Direct Access to Engineers',
        valueTitleDescription: "Codingscape gives you direct access to the engineers working on your project thereby creating accountability and communication to achieve successful results. Working with other firms, you're often unable to communicate directly with the engineers on the project.",
        internalLabs: false,
        internalLabsDescription: '',
        largeConsultancies: true,
        largeConsultanciesDescription: '',
        codingscape: true,
        codingscapeDescription: "You can work directly with Codingscape engineers, they are excellent communicators and can become part of your project team.",
        nearshoreFirms: false,
        nearshoreFirmsDescription: '',
        offshoreFirms: false,
        offshoreFirmsDescription: ''
    },
    {
        id: 7,
        valueTitle: 'USA Based and Working Hours',
        valueTitleDescription: "Collaborating in foreign languages and different time zones is hard. Codingscape works in your time zone with American engineers. Our team will work with you as well or better than your internal team.",
        internalLabs: true,
        internalLabsDescription: '',
        largeConsultancies: true,
        largeConsultanciesDescription: '',
        codingscape: true,
        codingscapeDescription: "All Codingscape engineers are based in the USA and speak English as a first language.",
        nearshoreFirms: false,
        nearshoreFirmsDescription: '',
        offshoreFirms: false,
        offshoreFirmsDescription: ''
    },
    {
        id: 8,
        valueTitle: 'Technology Match',
        valueTitleDescription: "Finding development talent in the software language that you organization uses can be difficult. Codingscape will match your project to a senior engineer that is an expert in the language it is written in and will provide scalable code that works well long after our engagement is over.",
        internalLabs: true,
        internalLabsDescription: '',
        largeConsultancies: true,
        largeConsultanciesDescription: '',
        codingscape: true,
        codingscapeDescription: "Codingscape's team are experts at the technologies listed here [LINK]. If they match your need then we can staff your project successfully.",
        nearshoreFirms: true,
        nearshoreFirmsDescription: '',
        offshoreFirms: false,
        offshoreFirmsDescription: ''
    },
    {
        id: 9,
        valueTitle: 'Enterprise-Grade',
        valueTitleDescription: "Codingscape works with some of the largest tech companies in the world. We are experts at working on legacy systems and integrating new technology into organizations.",
        internalLabs: true,
        internalLabsDescription: '',
        largeConsultancies: true,
        largeConsultanciesDescription: '',
        codingscape: true,
        codingscapeDescription: "Codingscape works with some of the largest companies in the world - we are enterprise grade and can meet your large organization's needs.",
        nearshoreFirms: false,
        nearshoreFirmsDescription: '',
        offshoreFirms: false,
        offshoreFirmsDescription: ''
    },
    {
        id: 10,
        valueTitle: 'Data Security and Privacy',
        valueTitleDescription: "Codingscape works with some of the largest tech companies in the world and adhere to the utmost data and security standards in collaboration with our clients. We can adhere to any data and privacy rulesets that your organization may have.",
        internalLabs: true,
        internalLabsDescription: '',
        largeConsultancies: true,
        largeConsultanciesDescription: '',
        codingscape: true,
        codingscapeDescription: "Codignscape already works with some of the worlds largest tech companies. We can meet any data privacy or security standard you require.",
        nearshoreFirms: false,
        nearshoreFirmsDescription: '',
        offshoreFirms: false,
        offshoreFirmsDescription: ''
    },
]

const CustomToolbar = () => {
    const classes = useStyles()
    return (
        <GridToolbarContainer className={classes.root} style={{padding: '0 10px'}}>
            <GridColumnsToolbarButton className={classes.root}/>
            <GridFilterToolbarButton className={classes.root}/>
            <GridToolbarExport className={classes.root}/>
        </GridToolbarContainer>
    )
}

const AppContainer = () => {
    const classes = useStyles()
    return (
        <>
        <ThemeProvider theme={headerTitle}>
            <CssBaseline />
        </ThemeProvider>
        <h1
            className={classes.root}
            style={{
            fontFamily: 'lores12ot-reg',
            src: `url(${LoRes}) format('woff2')`,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 48,
            padding: '20px 10px 10px 10px', 
            margin: '-10px 0px'
            }}
        >Custom Development Market</h1>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{display: 'flex', height: '100vh'}}>
                <div style={{flexGrow: 1}}>
                    <div className={classes.root} style={{padding: '10px', margin: '-10px 0px'}}>
                        <p>See how Codingscape compares. Hover/Tap on values for explanations.</p>
                    </div>
                    <DataGrid
                        className={classes.root}
                        rows={rows}
                        row={classes.row}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick={true}
                        components={{
                            Toolbar: CustomToolbar,
                        }}
                        hideFooter={true}
                    />
                </div>
            </div>
        </ThemeProvider>
        </>
    )
}

export default AppContainer