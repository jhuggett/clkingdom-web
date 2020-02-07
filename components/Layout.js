import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <style jsx global>{`
            body {
                background: black;
            }

            body {
                color: white;
                font: 1rem Monaco;
            }

            
            
        `}</style>
    </div>
)

export default Layout;