import '../Assets/Styles/App.css';
// Logo for Crypto Profit Loss Calculator App



function CardShowcase({ title, desc, imgURL, imgAlt,cardLink }) {
    return (
        <a href={cardLink}>
        <div class="app-card">
            <img src={imgURL} width="320" height="180" alt={imgAlt}></img>
            <div class="card-title"><h2>{title}</h2></div>
            <div class="card-desc"><p>{desc}</p></div>
        </div>
        </a>
    );
}

export default CardShowcase;