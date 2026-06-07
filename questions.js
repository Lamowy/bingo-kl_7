var Question = /** @class */ (function () {
    function Question(question, answers, correctAnswer, x, y) {
        this._answers = [];
        this._question = question;
        this._answers = answers;
        this._correctAnswer = correctAnswer;
        this._x = x;
        this._y = y;
    }
    Question.prototype.getQuestion = function () {
        return this._question;
    };
    Question.prototype.getAnswers = function () {
        return this._answers;
    };
    Question.prototype.getCorrectAnswer = function () {
        return this._correctAnswer;
    };
    Question.prototype.getX = function () {
        return this._x;
    };
    Question.prototype.getY = function () {
        return this._y;
    };
    return Question;
}());

var questions = [
    new Question("Kto był twórcą włoskiego faszyzmu?", ["Józef Stalin", "Benito Mussolini", "Adolf Hitler", "Józef Piłsudski"], "Benito Mussolini", 1, 1),
    new Question("Kto był przywódcą ZSRR w okresie międzywojennym?", ["Franklin Roosevelt", "Józef Stalin", "Włodzimierz Lenin", "Ignacy Mościcki"], "Józef Stalin", 1, 2),
    new Question("Kto przejął władzę w Niemczech w 1933 roku jako kanclerz?", ["Józef Stalin", "Winston Churchill", "Adolf Hitler", "Benito Mussolini"], "Adolf Hitler", 1, 3),
    new Question("Kto był pierwszym Naczelnikiem Państwa Polskiego po 1918 roku?", ["Ignacy Mościcki", "Wincenty Witos", "Roman Dmowski", "Józef Piłsudski"], "Józef Piłsudski", 1, 4),
    new Question("Kto w Rosji był przywódcą rewolucji październikowej i poprzednikiem Stalina?", ["Leon Trocki", "Józef Stalin", "Adolf Hitler", "Włodzimierz Lenin"], "Włodzimierz Lenin", 1, 5),
    new Question("Który zestaw poprawnie przypisuje przywódcę do państwa?", ["Piłsudski – Niemcy, Stalin – Włochy, Hitler – ZSRR", "Lenin – Niemcy, Mościcki – ZSRR, Piłsudski – Włochy", "Mussolini – Włochy, Stalin – ZSRR, Hitler – Niemcy", "Hitler – Włochy, Mussolini – Niemcy, Stalin – Polska"], "Mussolini – Włochy, Stalin – ZSRR, Hitler – Niemcy", 1, 6),

    new Question("W którym roku Polska odzyskała niepodległość?", ["1920", "1926", "1918", "1914"], "1918", 2, 1),
    new Question("Które zdanie najlepiej opisuje sytuację Polski po odzyskaniu niepodległości?", ["Polska od razu stała się jednym z najbogatszych państw Europy.", "Polska nie miała dostępu do morza.", "Wszystkie ziemie miały takie same prawa i gospodarkę.", "Polska musiała połączyć ziemie należące wcześniej do trzech zaborów."], "Polska musiała połączyć ziemie należące wcześniej do trzech zaborów.", 2, 2),
    new Question("W którym roku uchwalono konstytucję marcową?", ["1926", "1935", "1918", "1921"], "1921", 2, 3),
    new Question("Jak nazywało się wydarzenie, podczas którego Józef Piłsudski przejął władzę w 1926 roku?", ["Cud nad Wisłą", "Przewrót majowy", "Powstanie śląskie", "Wojna polsko-bolszewicka"], "Przewrót majowy", 2, 4),
    new Question("W jakim mieście zbudowano nowoczesny port morski w okresie międzywojennym?", ["Kraków", "Poznań", "Gdynia", "Szczecin"], "Gdynia", 2, 5),
    new Question("Kto został pierwszym Naczelnikiem Państwa Polskiego?", ["Józef Piłsudski", "Ignacy Mościcki", "Wincenty Witos", "Roman Dmowski"], "Józef Piłsudski", 2, 6),

    new Question("Kto był przywódcą niemieckich nazistów?", ["Benito Mussolini", "Adolf Hitler", "Józef Stalin", "Winston Churchill"], "Adolf Hitler", 3, 1),
    new Question("Dlaczego wielu Niemców poparło Hitlera na początku lat 30.?", ["Niemcy były bardzo bogate i stabilne", "Hitler obiecywał rozwiązanie problemów gospodarczych i odbudowę potęgi państwa", "Hitler chciał oddać władzę parlamentowi", "Liga Narodów nakazała jego wybór"], "Hitler obiecywał rozwiązanie problemów gospodarczych i odbudowę potęgi państwa", 3, 2),
    new Question("Która cecha najbardziej łączyła rządy Hitlera i Stalina?", ["Istnienie wielu legalnych partii politycznych", "Swoboda krytykowania rządu", "Demokratyczne wybory decydujące o wszystkich działaniach państwa", "Kontrola społeczeństwa i zwalczanie przeciwników politycznych"], "Kontrola społeczeństwa i zwalczanie przeciwników politycznych", 3, 3),
    new Question("Co naziści wykorzystywali do wpływania na opinię publiczną?", ["Propagandę", "Referenda lokalne", "Wolne media", "Niezależne związki zawodowe"], "Propagandę", 3, 4),
    new Question("W którym roku Hitler został kanclerzem Niemiec?", ["1919", "1929", "1933", "1939"], "1933", 3, 5),
    new Question("Jak nazywała się partia kierowana przez Hitlera?", ["Liga Narodów", "NSDAP", "NKWD", "PPS"], "NSDAP", 3, 6),

    new Question("Kto przejął władzę w ZSRR po Leninie?", ["Leon Trocki", "Adolf Hitler", "Józef Stalin", "Benito Mussolini"], "Józef Stalin", 4, 1),
    new Question("Jak nazywała się policja polityczna w ZSRR za czasów Stalina?", ["CIA", "Gestapo", "Liga Narodów", "NKWD"], "NKWD", 4, 2),
    new Question("Co oznacza pojęcie „kult jednostki”?", ["Oddawanie czci i wychwalanie przywódcy", "Brak przywódcy państwa", "Równe traktowanie wszystkich obywateli", "Coroczne wybory"], "Oddawanie czci i wychwalanie przywódcy", 4, 3),
    new Question("Czym była „wielka czystka”?", ["Reformą szkolnictwa", "Sojuszem wojskowym", "Kampanią usuwania i prześladowania przeciwników Stalina", "Programem budowy nowych miast"], "Kampanią usuwania i prześladowania przeciwników Stalina", 4, 4),
    new Question("Dlaczego Stalin stosował terror wobec społeczeństwa?", ["Chciał zwiększyć liczbę partii politycznych", "Chciał utrzymać pełną kontrolę nad państwem i wyeliminować przeciwników", "Chciał zdobyć kolonie w Afryce", "Chciał ograniczyć rozwój przemysłu"], "Chciał utrzymać pełną kontrolę nad państwem i wyeliminować przeciwników", 4, 5),
    new Question("Która cecha najlepiej pokazuje, że ZSRR za Stalina był państwem totalitarnym?", ["Obywatele mogli swobodnie krytykować władzę", "Najważniejsze decyzje podejmowano w referendum", "Istniało wiele konkurujących partii politycznych", "Władza kontrolowała media, życie społeczne i zwalczała opozycję"], "Władza kontrolowała media, życie społeczne i zwalczała opozycję", 4, 6),

    new Question("W jakim państwie narodził się faszyzm?", ["Niemcy", "Francja", "Hiszpania", "Włochy"], "Włochy", 5, 1),
    new Question("Kto był twórcą włoskiego faszyzmu?", ["Benito Mussolini", "Adolf Hitler", "Józef Stalin", "Włodzimierz Lenin"], "Benito Mussolini", 5, 2),
    new Question("Jak nazywało się wydarzenie z 1922 roku, które pomogło Mussoliniemu przejąć władzę?", ["Traktat Wersalski", "Rewolucja Październikowa", "Marsz na Rzym", "Noc Kryształowa"], "Marsz na Rzym", 5, 3),
    new Question("Która cecha była charakterystyczna dla państwa faszystowskiego?", ["Silna władza jednego przywódcy", "Brak armii", "Pełna wolność prasy i partii politycznych", "Rządy parlamentu bez ograniczeń"], "Silna władza jednego przywódcy", 5, 4),
    new Question("Dlaczego wielu Włochów poparło faszystów po I wojnie światowej?", ["Ponieważ Liga Narodów nakazała im przejąć władzę", "Ponieważ Włochy były bardzo bogate i stabilne", "Ponieważ faszyści obiecywali rozwiązanie problemów gospodarczych i przywrócenie porządku", "Ponieważ faszyści chcieli zlikwidować państwo włoskie"], "Ponieważ faszyści obiecywali rozwiązanie problemów gospodarczych i przywrócenie porządku", 5, 5),
    new Question("Które stwierdzenie najlepiej odróżnia faszyzm od demokracji?", ["W faszyzmie wszystkie decyzje podejmują obywatele w referendum.", "W faszyzmie najważniejsza jest władza jednego przywódcy, a opozycja jest ograniczana lub zwalczana.", "W faszyzmie parlament ma większą władzę niż rząd.", "W faszyzmie obywatele wybierają spośród wielu partii politycznych."], "W faszyzmie najważniejsza jest władza jednego przywódcy, a opozycja jest ograniczana lub zwalczana.", 5, 6),

    new Question("Jak nazywał się traktat kończący wojnę z Niemcami po I wojnie światowej?", ["Traktat wiedeński", "Traktat wersalski", "Traktat paryski", "Traktat berliński"], "Traktat wersalski", 6, 1),
    new Question("W którym roku podpisano traktat wersalski?", ["1914", "1918", "1919", "1920"], "1919", 6, 2),
    new Question("Która organizacja została utworzona, aby zapobiegać przyszłym wojnom?", ["NATO", "ONZ", "Unia Europejska", "Liga Narodów"], "Liga Narodów", 6, 3),
    new Question("Które państwo NIE powstało po I wojnie światowej?", ["Czechosłowacja", "Finlandia", "Jugosławia", "Belgia"], "Belgia", 6, 4),
    new Question("Które z poniższych postanowień NIE należało do warunków narzuconych Niemcom przez traktat wersalski?", ["Ograniczenie liczebności armii niemieckiej", "Obowiązek płacenia reparacji wojennych", "Utrata części terytoriów na rzecz innych państw", "Przyłączenie Niemiec do Austrii"], "Przyłączenie Niemiec do Austrii", 6, 5),
    new Question("Dlaczego część Niemców uważała traktat wersalski za niesprawiedliwy?", ["Niemcy otrzymały zbyt mało kolonii w Afryce.", "Niemcy musiały oddać część terytoriów, ograniczyć armię i płacić odszkodowania wojenne.", "Niemcy zostały zmuszone do przyłączenia się do Francji.", "Niemcy utraciły dostęp do Morza Bałtyckiego."], "Niemcy musiały oddać część terytoriów, ograniczyć armię i płacić odszkodowania wojenne.", 6, 6)
];