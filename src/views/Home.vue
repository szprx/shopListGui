<template>
    <div class="site">
        <section class="hero">
            <div class="hero-text container">
                <h1 class="title">GOLDEN</h1>
<div class="con">
        <img class="pies-img" src="../assets/golden-retriever-ciekawostki.jpg" alt="pies">
    <div>
        <p>Golden Retriever to jedna z najpopularniejszych ras psów na świecie. Są to duże, silne i inteligentne psy, które charakteryzują się przyjacielskim i łagodnym usposobieniem. Oto kilka cech charakterystycznych dla tej rasy:</p>

        <h1 class="sum-title">Wygląd</h1>
        <ul>
            <li>Golden Retriever to pies średniej wielkości, o proporcjonalnej budowie ciała.</li>
            <li>Mają mocne, muskularne nogi i dobrze umięśnione ciało.</li>
            <li>Ich sierść jest gęsta, długa i jedwabista, z charakterystycznym pięknym złocistym lub kremowym umaszczeniem.</li>
            <li>Mają charakterystyczne uszy w kształcie płatka.</li>
        </ul>

        <h1 class="sum-title">Temperament</h1>
        <ul>
            <li>Golden Retriever jest znany ze swojego przyjacielskiego i łagodnego charakteru.</li>
            <li>Są bardzo towarzyscy, kochają kontakt z ludźmi i dobrze dogadują się z dziećmi i innymi zwierzętami.</li>
            <li>Są inteligentne i łatwo szkolące się, co sprawia, że są popularnym wyborem jako psy przewodniki, terapeutyczne czy do pracy w służbach ratowniczych.</li>
        </ul>

        <h1 class="sum-title">Aktywność</h1>
        <ul>
            <li>Golden Retriever to rasa o umiarkowanym poziomie aktywności.</li>
            <li>Są energicznymi psami, które potrzebują regularnej dawki ruchu i aktywności fizycznej.</li>
            <li>Chętnie uczestniczą w różnych zajęciach, takich jak długie spacery, biegi, a także pływanie, ponieważ mają naturalną skłonność do wody.</li>
        </ul>

        <h1 class="sum-title">Rodzina</h1>
        <ul>
            <li>Golden Retriever to wspaniałe psy rodzinne.</li>
            <li>Są oddane i przywiązane do swoich właścicieli, co sprawia, że są wspaniałymi towarzyszami dla całej rodziny.</li>
            <li>Są cierpliwe i łagodne, co czyni je również odpowiednimi dla rodzin z małymi dziećmi.</li>
        </ul>

        <h1 class="sum-title">Troska o sierść</h1>
        <ul>
            <li>Ze względu na długą i gęstą sierść, Golden Retriever wymaga regularnego czesania, aby utrzymać ją w dobrym stanie.</li>
            <li>Wymagają szczególnej uwagi podczas linienia, które występuje dwa razy w roku.</li>
            <li>Częste czesanie pozwoli zminimalizować gromadzenie się sierści w domu.</li>
        </ul>

        <h1 class="sum-title">Zdrowie</h1>
        <ul>
            <li>Golden Retriever to rasa podatna na pewne problemy zdrowotne, takie jak dysplazja stawów, choroba oczu czy skłonność do otyłości.</li>
            <li>Ważne jest regularne odwiedzanie weterynarza, prawidłowe żywienie oraz zapewnienie odpowiedniej ilości aktywności fizycznej, aby utrzymać ich w dobrej kondycji.</li>
        </ul>

        <p>Golden Retriever to wspaniała rasa psów, która jest ceniona za swoją inteligencję, łagodność i przyjacielskie usposobienie.</p>
        <p>Są to wierni i oddani towarzysze, idealni dla rodzin i osób aktywnych, które cenią sobie interakcję i ruch na świeżym powietrzu.</p>


    </div>
</div>
            </div>

        </section>
    </div>
</template>

<script>

export default {
    name: "Home",
    components: {},
};
</script>

<style lang="scss" scoped>
.con{
  width: auto;

}
.pies-img{
  margin-top: 10px;
    height: auto;
    width: 280px;
  float: left;
  margin-right: 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid #000;
    border-radius: 5px;
    @media (min-width: 780px) {
        width: auto;
        height: 400px;
    }
}
p{
  font-weight: 3000;
  font-size: large;
}
.title{
    font-size: 50px;
    text-align: center;
    margin-bottom: 10px;
    color: goldenrod;
}
h2{
    font-size: 50px;
    text-align: center;
    margin-bottom: 10px;
    color: goldenrod;
}
ul{
    margin-left: 20px;
    list-style-type: none;
}
p {
    margin-bottom: 10px;
}
.sum-title{
    font-size: 30px;
    margin-bottom: 5px;
    margin-top: 10px;
}



</style>