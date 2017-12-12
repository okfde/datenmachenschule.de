---
layout: default
title: Offener Haushalt
permalink: /tools/offener-haushalt/
---

<!-- include hero  -->
{% assign quotes = "Offener Haushalt" | split: '|' %}
{% include partials/hero.liquid  %}

<div class="row">
    <section class="section bg-grey col-xs-24">
        <div class="text-wrap text-block bg-white fade-in">
            <p> 
            OffenerHaushalt.de ist eine Plattform, deren Prototyp vor einigen Jahren von Mitarbeitern der Open Knowledge Foundation entwickelt wurde. Für DatenmachenSchule wurde sie nun von Grund auf überholt und mit neuen Funktionen und Daten versehen.     
            </p>
            <h3>Warum ist der Haushalt so wichtig?</h3>            
            <p>Der Haushaltsplan ist das Planungswerk für alle voraussichtlichen Aufwände und Erträge sowie Ein- und Auszahlungen im Haushaltsjahr. Hier wird festgelegt, wie viel Geld der Staat für welche staatlichen Aufgaben zur Verfügung hat. Es gibt ihn auf Bundes-, Länder-, und Kommunalebene. Der Haushalt ist ein <strong>direktes Fenster in die Prioritäten und Handlungen</strong> der jeweiligen Gebietskörperschaften.</p>
           
            <p>Im Falle der deutschen Kommunen wird der Haushalt häufig in PDF Dokumenten veröffentlicht, die oft über <a href="https://www.moers.de/de/leistungen/haushaltsplan-2017/" target="_blank">1000 Seiten lang sind</a>. Diese Dokumente enthalten komplexe Tabellen und sind für Laien eher schwer verständlich. Eine wichtige Ressource, die das staatliche Handeln beschreibt, ist dadurch in vielen Fällen effektiv unzugänglich, und ein wesentlicher Aspekt politischer Arbeit bleibt für viele verschlossen.</p>
            <p>OffenerHaushalt ist eine Online-Applikation, die mit dem Ziel entwickelt wurde, dies zu ändern indem Haushaltsdaten zugänglich und verständlich gemacht werden. Dies wird erreicht, indem die einzelnen Einnahmen- und Ausgabenfelder anteilig und proportional zueinander grafisch dargestellt werden. Die Ebenen des Haushalts können dann per Mausklick ausgewählt und angesehen werden.</p>
       
       <iframe src="http://beta.offenerhaushalt.de/haushalt/moers/embed" width="100%" height="520px" frameborder="0" style="margin:0">
       <a href="http://beta.offenerhaushalt.de/haushalt/moers/">Offener Haushalt: Stadt Moers</a>
       </iframe>
       <br/>
       <small>
       <a href="http://beta.offenerhaushalt.de/haushalt/moers/">OffenerHaushalt.de</a>
       </small>

            <p> Stand Dezember 2017 liegen Haushaltspläne für den Bund und acht Bundesländer (Berlin, Brandenburg, Bremen, Hamburg,  Niedersachsen, Nordrhein-Westfalen, Rheinland-Pfalz, Schleswig-Holstein) vor. Außerdem sind bisher sechs Kommunen visualisiert (Bonn, Freiburg, Gilching, Ludwigslust, Moers, Wesel). Die unterschiedlichen Visualisierungen lassen sich interaktiv über eine Karte oder eine drop-down Liste ansteuern. </p>

            <p> Zudem zeigt OffenerHaushalt.de am Ende der Seite eine Liste mit allen Kommunen für das jeweilige Bundesland an, das verschafft einen Überblick über die Verwaltungsstrukturen. </p>

            <h3>Schritte zum visualisierten Haushalt</h3>

            <p>Im Fall von Moers gab es bereits eine maschinenlesbare Haushaltsdatei, die zum Download bereitgestellt wurde. Das Format war hierbei allerdings zunächst problematisch da es die technischen Anforderungen nicht erfüllte, und konnte nicht verarbeitet werden. Nach der Kontaktaufnahme mit dem örtlichen Rechenzentrum war es aber möglich, die Daten im passenden Format zu besorgen. Daraus ist das angehängte <strong>Datenblatt</strong> entstanden, dass nun verwendet werden kann, um an Kommunen mit der Bitte heranzutreten, die Daten entsprechend bereitzustellen.</p>

            <p>Übrigens: Haushaltsdaten lassen sich auch über das Portal FragdenStaat anfragen! <a href="https://fragdenstaat.de/" target="_blank">Dazu gibt es hier mehr.</a></p>
            
            <p>Welche Schritte nötig sind, um den Haushalt zu visualisieren, ist auf der Webseite von <a href="https://offenerhaushalt.de/" target="_blank">Offener Haushalt</a> zusammengefasst. </p>

            <h3>Offener Haushalt bietet eine Reihe neuer Funktionen</h3>
            <p>Für die Visualisierungen haben sich die Kacheldiagramme (engl. treemap) bewährt. Diese zeigen neben den absoluten Zahlen auch wie viel Prozent ein bestimmter Posten im Budget ausmacht. Die Visualisierungen lassen sich per iframe auch auf jeder anderen Internetseite darstellen. Dafür muss lediglich auf “Embed” geklickt werden und der angezeigte Code im HMTL der neuen Seite hinterlegt werden. Außerdem kann zusätzlich zur Visualisierung Text hinzugefügt werden, welcher die Visualisierung weiter erklärt. So wie beispielsweise in Moers (siehe Visualisierung).</p> 

            <p>Das Tool bietet außerdem die Möglichkeit, die Haushaltsausgaben pro Kopf anzuzeigen, um die teilweise sehr hohen Beträge greifbarer zu machen. Mit den entsprechenden demographischen Informationen lassen sich die Beträge außerdem auf andere Gruppen aufschlüssen, wie z.B. Berufstätige, bestimmte Altersgruppen oder Wahlberechtigte.</p>

            <p><a href="http://beta.offenerhaushalt.de/haushalt/bund2017/">OffenerHaushalt.de</a></p>


            <h3>Ideen für den Unterricht</h3>
            <p>Offener Haushalt bietet vielseitige Einsatzmöglichkeiten im Unterricht: ob im Wirtschafts- und Politikunterricht, in der Mathematik oder Informatik. Die Diskussion von Haushaltsplänen führt zu einem verbesserten Verständnis der politischen Strukturen in Deutschland und erklärt auf lokaler Ebene wie eine Kommune funktioniert. </p>
   
            <p>Für die Auseinandersetzung mit großen Zahlen und der Prozentrechnung im Mathematikunterricht ist OffenerHaushalt.de ein wunderbares Beispiel. Mit der eingebauten “Skala hinzufügen” Funktion lassen sich die hohen Beträge beispielsweise Pro-Einwohner darstellen. Eine Haushaltsdatei auf OffenerHaushalt.de bereitzustellen vermittelt in wenigen einfachen Schritten Kenntnisse in der Formatierung von Daten, in deren Visualisierung und dem Zusammenspiel von Backend und Frontend welche in den Informatikunterricht passen. </p> 

            <h3>Wie funktioniert meine Kommune?</h3>
            <p>Aufgaben</p>
            <ul>
                <li>kommunale Haushaltsdaten in visualisierter Form exemplarisch analysieren - durch Visualisierung wird einfaches Verständnis gefördert</li>
                <li>Wie funktioniert unsere Stadt? → durch Haushaltsdaten kann man sich der Struktur der Stadt nähern → Bürgermeister, Stadträte (Beigeordnete) → wer verantwortet welche Fachbereiche? Welche Leistungen stecken in den jeweiligen Fachbereichen?</li>
                <li>Was muss die Stadt tun (gesetzliche Leistungen)? Was sind “freiwillige” Leistungen?</li>
                <li>Haushaltsdebatte um Einsparungen: welcher Etat macht wie viel aus, und wie hoch wäre der Effekt wenn man ihn einsparen würde? Beispiel: Kulturetat
                    <ul>
                        <li>These: Man will den Kulturetat um 1% erhöhen, wo kann überhaupt gekürzt werden?</li>
                    </ul>
                </li>
                <li>Vergleich ähnlicher Städte anhand Ihrer Haushalte z.B. Moers vs. Wesel</li>
            </ul>

            <h3> Zusätzliche Informationen </h3>
            Lexikon der Haushalts- und Finanzwirtschaft auf <a href="https://www.haushaltssteuerung.de/lexikon.html">Haushaltssteuerung.de</a>

            
        </div>
    </section>
</div>
<!-- include leitfaden section -->
{% include sections/leitfaden.liquid %}


<!--            <div class="video-wrap">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wwabkPzcBkI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            </div>
-->

