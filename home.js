function Home(){
    return (
        <Card 
            bgcolor="primary"
            txtcolor="black"
            header="BadBank Landing Page"
            title="You can use this bank"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}