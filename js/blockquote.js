const quotes = [
    { 
        "quote" : "Учитывая печальное состояние современных компьютерных программ, разработку ПО до сих пор можно считать искусством, а не научной дисциплиной.", 
        "source" : "Bill Clinton" 
    },
    {
        "quote" : "Два самых известных продукта, созданных в Университете Беркли — это UNIX и LSD. Это не может быть просто совпадением.", 
        "source" : "Jeremy S. Anderson"
    },
    {
        "quote" : "Те, кого беспокоит бесплатное ПО, обычно производят продукты, которые стоят и того меньше.", 
        "source" : "David Emery"
    },
    {
        "quote" : "Поставщики ПО постоянно пытаются сделать свои продукты более user-friendly. Пока что все попытки это сделать сводятся к написанию слов user-friendly на обложке документации.", 
        "source" : "Bill Gates"
    },
    {
        "quote" : "Программисты постоянно соревнуются со Вселенной: они пытаются создать всё более идиотоустойчивые программы, а Вселенная создаёт всё более совершенных идиотов. Пока что Вселенная побеждает.", 
        "source" : "Rich Cook"
    },
    {
        "quote" : "Для начала изучите теорию. Затем обретите собственный стиль программирования. И, наконец, забудьте об этой ерунде и просто пишите код.", 
        "source" : "George Carrette"
    },
    {
        "quote" : "Не переживайте, если что-то идёт не так. Если бы работало абсолютно всё, не работали бы вы.", 
        "source" : "Главный закон разработки ПО"
    },
    {
        "quote" : "Образование в сфере компьютерных технологий точно так же не сделает из вас отличного программиста, как изучение кистей и красок не сделает вас прекрасным художником.", 
        "source" : "Eric Raymond"
    },
    {
        "quote" : "Существует только два вида языков программирования: те, которые всех раздражают, и те, которые никто не использует.", 
        "source" : "Bjarne Stroustrup"
    },
    {
        "quote" : "COBOL наносит непоправимый вред работе мозга; именно поэтому его преподавание должно считаться уголовным преступлением.", 
        "source" : "E.W. Dijkstra"
    },
    {
        "quote" : "В мире нет такого языка программирования, на котором разработчики не смогли бы написать плохую программу.", 
        "source" : "Larry Flon"
    },
    {
        "quote" : "Есть два способа написать программу без ошибок; работает только третий.", 
        "source" : "Alan J. Perlis"
    },
    {
        "quote" : "Ошибки свойственны человеку, но для нечеловеческих ляпов нужен компьютер", 
        "source" : "Paul Ehrlich"
    },
    {
        "quote" : "Всегда пишите код так, как будто сопровождать его будет психопат, который знает, где вы живёте.", 
        "source" : "Martin Golding"
    },
    {
        "quote" : "640 Кб должно хватить для любых задач.", 
        "source" : "Bill Gates, 1981 г."
    }

]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}
randomQuote();