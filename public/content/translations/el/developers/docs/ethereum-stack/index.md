---
title: Εισαγωγή στην αποθήκευση κεφαλαίου στο Ethereum
description: Μια επισκόπηση των διαφορετικών επιπέδων της στοίβας Ethereum και πώς συνδέονται μεταξύ τους.
lang: el
---

Όπως κάθε στοίβα λογισμικού, η πλήρης "στοίβα Ethereum" θα διαφέρει από έργο σε έργο ανάλογα με τους στόχους σας.

Ωστόσο, υπάρχουν βασικά στοιχεία του Ethereum που βοηθούν στην παροχή ενός νοητικού μοντέλου για το πώς οι εφαρμογές λογισμικού αλληλεπιδρούν με την κρυπτοαλυσίδα Ethereum. Η κατανόηση των επιπέδων της στοίβας θα σας βοηθήσει να κατανοήσετε τους διαφορετικούς τρόπους με τους οποίους το Ethereum μπορεί να ενσωματωθεί σε έργα λογισμικού.

## Επίπεδο 1: Εικονική Μηχανή Ethereum {#ethereum-virtual-machine}

Η [Εικονική Μηχανή Ethereum (EVM)](/developers/docs/evm/) είναι το περιβάλλον εκτέλεσης για έξυπνα συμβόλαια στο Ethereum. Όλα τα έξυπνα συμβόλαια και οι αλλαγές κατάστασης στην αλυσίδα μπλοκ Ethereum εκτελούνται από [συναλλαγές](/developers/docs/transactions/). Η EVM χειρίζεται όλη την επεξεργασία συναλλαγών στο δίκτυο Ethereum.

Όπως συμβαίνει με οποιαδήποτε εικονική μηχανή, η EVM δημιουργεί ένα επίπεδο απόκρυψης μεταξύ του εκτελούμενου κώδικα και της εκτελούσας μηχανής (ένας κόμβος Ethereum). Επί του παρόντος, η EVM εκτελείται σε χιλιάδες κόμβους που είναι διασκορπισμένοι σε όλο τον κόσμο.

Κάτω από την επιφάνεια, η EVM χρησιμοποιεί ένα σύνολο οδηγιών opcode για να εκτελέσει συγκεκριμένες εργασίες. Αυτές οι (140 μοναδικές) οδηγίες επιτρέπουν στην EVM να είναι [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness), πράγμα που σημαίνει ότι η EVM είναι σε θέση να υπολογίσει σχεδόν οτιδήποτε, με δεδομένους αρκετούς πόρους.

Ως προγραμματιστής dapp, δε χρειάζεται να γνωρίζετε πολλά για την EVM πέρα ​​από το ότι υπάρχει και ότι τροφοδοτεί με αξιοπιστία όλες τις εφαρμογές στο Ethereum χωρίς διακοπές.

## Επίπεδο 2: Έξυπνα Συμβόλαια {#smart-contracts}

Τα [Έξυπνα Συμβόλαια](/developers/docs/smart-contracts/) είναι τα εκτελέσιμα προγράμματα που εκτελούνται στην κρυπτοαλυσίδα του Ethereum.

Τα έξυπνα συμβόλαια γράφονται χρησιμοποιώντας συγκεκριμένες [γλώσσες προγραμματισμού](/developers/docs/smart-contracts/languages/) που μεταγλωττίζονται σε bytecode EVM (οδηγίες χαμηλού επιπέδου μηχανής που ονομάζονται opcodes).

Τα έξυπνα συμβόλαι όχι μόνο χρησιμεύουν ως βιβλιοθήκες ανοιχτού κώδικα, αλλά είναι ουσιαστικά ανοιχτές υπηρεσίες API που εκτελούνται συνεχώς και δεν μπορούν να καταργηθούν. Τα έξυπνα συμβόλαια παρέχουν δημόσιες συναρτήσεις με τις οποίες οι χρήστες και οι εφαρμογές ([dapps](/developers/docs/dapps/)) μπορούν να αλληλεπιδράσουν, χωρίς να χρειάζονται άδεια. Οποιαδήποτε εφαρμογή μπορεί να ενσωματωθεί με αναπτυγμένες έξυπνα συμβόλαια για να συνθέσει λειτουργικότητα, όπως η προσθήκη [τροφοδοσιών δεδομένων](/developers/docs/oracles/) ή η υποστήριξη ανταλλαγής token. Επιπλέον, ο καθένας μπορεί να αναπτύξει νέες έξυπνα συμβόλαια στο Ethereum για να προσθέσει προσαρμοσμένη λειτουργικότητα για να καλύψει τις ανάγκες της εφαρμογής του.

Ως προγραμματιστής dapp, θα πρέπει να γράψετε έξυπνα συμβόλαια μόνο εάν θέλετε να προσθέσετε προσαρμοσμένη λειτουργικότητα στην κρυπτοαλυσίδα του Ethereum. Μπορείτε να διαπιστώσετε ότι μπορείτε να καλύψετε τις περισσότερες ή όλες τις ανάγκες του έργου σας απλώς ενσωματώνοντας υπάρχουσες έξυπνα συμβόλαια, για παράδειγμα εάν θέλετε να υποστηρίξετε πληρωμές σε σταθερά νομίσματα ή να ενεργοποιήσετε αποκεντρωμένη ανταλλαγή token.

## Επίπεδο 3: Οι Κόμβοι του Ethereum {#ethereum-nodes}

Για να αλληλεπιδράσει μια εφαρμογή με την κρυπτοαλυσίδα Ethereum, πρέπει να συνδεθεί σε έναν [κόμβο Ethereum](/developers/docs/nodes-and-clients/). Η σύνδεση σε έναν κόμβο σας επιτρέπει να διαβάζετε δεδομένα κρυπτοαλυσίδας και/ή να στέλνετε συναλλαγές στο δίκτυο.

Οι κόμβοι Ethereum είναι υπολογιστές που εκτελούν λογισμικό - έναν πελάτη Ethereum. Ένας πελάτης είναι μια υλοποίηση του Ethereum που επαληθεύει όλες τις συναλλαγές σε κάθε μπλοκ, διατηρώντας το δίκτυο ασφαλές και τα δεδομένα ακριβή. **Οι κόμβοι Ethereum είναι η κρυπτοαλυσίδα Ethereum**. Αποθηκεύουν συλλογικά την κατάσταση της κρυπτοαλυσίδας Ethereum και καταλήγουν σε συναίνεση σχετικά με τις συναλλαγές για να μεταλλάξουν την κατάσταση της κρυπτοαλυσίδας.

Συνδέοντας την εφαρμογή σας σε έναν κόμβο Ethereum (μέσω του[ API JSON-RPC](/developers/docs/apis/json-rpc/)), η εφαρμογή σας μπορεί να διαβάσει δεδομένα από την κρυπτοαλυσίδα (όπως τα υπόλοιπα λογαριασμών χρηστών) καθώς και να μεταδώσει νέες συναλλαγές στο δίκτυο (όπως η μεταφορά ETH μεταξύ λογαριασμών χρηστών ή η εκτέλεση λειτουργιών έξυπνων συμβολαίων).

## Επίπεδο 4: Τα APIs των εφαρμογών-Πελάτη του Ethereum {#ethereum-client-apis}

Πολλές βιβλιοθήκες ευκολίας (που κατασκευάζονται και συντηρούνται από την κοινότητα ανοιχτού κώδικα του Ethereum) επιτρέπουν στις εφαρμογές σας να συνδέονται και να επικοινωνούν με την κρυπτοαλυσίδα Ethereum.

Εάν η εφαρμογή που βλέπει ο χρήστης είναι μια εφαρμογή ιστού, μπορείτε να επιλέξετε να `εγκαταστήσετε npm` ένα [JavaScript API](/developers/docs/apis/javascript/) απευθείας στο frontend σας. Ή ίσως επιλέξετε να υλοποιήσετε αυτή τη λειτουργικότητα στο διακομιστή, χρησιμοποιώντας ένα [Python](/developers/docs/programming-languages/python/) ή [Java](/developers/docs/programming-languages/java/) API.

Ενώ αυτά τα API δεν είναι ένα απαραίτητο κομμάτι της στοίβας, αποκρύπτουν μεγάλο μέρος της πολυπλοκότητας της άμεσης αλληλεπίδρασης με έναν κόμβο Ethereum. Παρέχουν επίσης χρήσιμες λειτουργίες (π.χ. μετατροπή από ETH σε Gwei) έτσι ώστε ένας προγραμματιστής να χρειαστεί λιγότερο χρόνο για τη διασύνδεση της εφαρμογής πελάτη του με το δίκτυο του Ethereum, επικεντρώνοντας στη μοναδική λειτουργικότητα της εφαρμογής.

## Επίπεδο 5: Εφαρμογές Τελικού Χρήστη {#end-user-applications}

Στο ανώτερο επίπεδο της στοίβας βρίσκονται οι εφαρμογές που απευθύνονται στον χρήστη. Αυτές είναι οι τυπικές εφαρμογές που χρησιμοποιείτε και δημιουργείτε τακτικά σήμερα: κυρίως εφαρμογές ιστού και κινητών.

Ο τρόπος ανάπτυξης αυτών των διεπαφών χρήστη παραμένει ουσιαστικά αμετάβλητος. Συχνά οι χρήστες δε θα χρειάζεται να γνωρίζουν ότι η εφαρμογή που χρησιμοποιούν είναι κατασκευασμένη χρησιμοποιώντας ένα blockchain.

## Έτοιμοι να επιλέξετε τη στοίβα σας; {#ready-to-choose-your-stack}

Δείτε τον οδηγό μας για να [ρυθμίσετε ένα τοπικό περιβάλλον ανάπτυξης](/developers/local-environment/) για την εφαρμογή Ethereum σας.

## Περισσότερες πληροφορίες {#further-reading}

- [Η Αρχιτέκτων της εφαρμογής του Web 3.0](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application) - _Preethi Kasireddy_

_Γνωρίζετε κάποιο πόρο της κοινότητας που σας βοήθησε; Επεξεργαστείτε αυτή τη σελίδα και προσθέστε το!_