/* 
   Goal: 
     conjugate('estudiar', { tense: 'present', subject: 'ella' });
       should return estudia
 */

module Subject = {
  /* 
     The type name becomes just `t` to avoid repetition when 
     accessed from outside the module 
   */
  /*
     Note:
      Removed all instances of tests or string matching that uses
      any utf-8 characters.
      All utf-8 characters must be formed with {js|utf-8|js} in order
      to correctly pattern match in ReasonML
   */
  type t =
    | Yo
    | Tu
    | Ella
    | Nosotras
    | Vosotras
    | Ellas;
  let deaccentuate subject => {
      if (subject === {j|tú|j}) {
        "tu"
      } else if (subject === {j|él/ella/Ud.|j}) {
        "ella";
      } else {
        subject;
      }
    
  };
  let ofString str => {
    switch(deaccentuate str) {
      | "yo" => Yo
      | "tu" => Tu
      | "ella" => Ella
      | "nosotros/nosotras" => Nosotras
      | "vosotros/vosotras" => Vosotras
      | _ => Ellas;
    }
  }
};


module Ending = {
  type t =
    | Ar
    | Er
    | Ir;
  let ofString str => { 
    switch(str) {
      | "ar" => Ar
      | "er" => Er
      | _ => Ir
    }
  }
};

let findEndType verb => Ending.ofString (String.sub verb (String.length verb - 2) 2);
/*
    A stem is the root, without the suffix ar/er/ir.
    The root is the whole infinitive.
 */
let findStem verb => String.sub verb 0 (String.length verb - 2);

let genPresentEnding subject verb => {
  let subjectType = Subject.ofString subject;
  let endingType = findEndType verb;
  let stem = findStem verb;
  switch (subjectType:Subject.t, endingType:Ending.t) {
    | (Yo, _) => (stem ^ "o")
    | (Tu, Ar) => (stem ^ "as")
    | (Tu, _) => (stem ^ "es")
    | (Ella, Ar) => (stem ^ "a")
    | (Ella, _) => (stem ^ "e")
    | (Nosotras, Ar) => (stem ^ "amos")
    | (Nosotras, Er) => (stem ^ "emos")
    | (Nosotras, _) => (stem ^ "imos")
    | (Vosotras, Ar) => (stem ^ {js|áis|js})
    | (Vosotras, Er) => (stem ^ {js|éis|js})
    | (Vosotras, _) => (stem ^ {js|ís|js})
    | (Ellas, Ar) => (stem ^ "an")
    | (Ellas, _) => (stem ^ "en")
  }
};
let genFutureEnding subject verb => {
  let subjectType = Subject.ofString subject;
  let endingType = findEndType verb;
  switch (subjectType:Subject.t, endingType:Ending.t) {
    | (Yo, _) => (verb ^ {js|é|js}) 
    | (Tu, _) => (verb ^ {js|ás|js}) 
    | (Ella, _) => (verb ^ {js|á|js})
    | (Nosotras, _) => (verb ^ "emos") 
    | (Vosotras, _) => (verb ^{js|éis|js}) 
    | (Ellas, _) => (verb ^ {js|án|js}) 
    }
};

let genPastEnding subject verb => {
  /*
      To Do:
      1) Decide on how to handle irregular conjugations
        a) Typing will have too many simple types
        b) Typing will not handle every infix conjugation of the root
   */
  let subjectType = Subject.ofString subject;
  let endingType = findEndType verb;
  let stem = findStem verb;
  switch (subjectType:Subject.t, endingType:Ending.t) {
    | (Yo, Ar) => (stem ^ {js|é|js}) 
    | (Yo, _) => (stem ^ {js|í|js})
    | (Tu, Ar) => (stem ^ "aste")
    | (Tu, _) => (stem ^ "iste")
    | (Ella, Ar) => (stem ^ {js|ó|js})
    | (Ella, _) => (stem ^ {js|ió|js})
    | (Nosotras, Ar) => (stem ^ "amos")
    | (Nosotras, _) => (stem ^ "imos")
    | (Vosotras, Ar) => (stem ^ "asteis")
    | (Vosotras, _) => (stem ^ "isteis")
    | (Ellas, Ar) => (stem ^ "aron")
    | (Ellas, _) => (stem ^ "ieron")
    }
};

let conjugate verb info => {
  let subject = info##subject;
  
  switch info##tense {
    | "present" => genPresentEnding subject verb
    | "future" => genFutureEnding subject verb
    | _ => genPastEnding subject verb
  }
};

let accentuate letter => {

  switch (letter) {
    | "a" => {js|á|js}
    | "e" => {js|é|js}
    | "i" => {js|í|js}
    | "o" => {js|ó|js}
    | "u" => {js|ú|js}
    | "uu" => {js|ü|js}
    | "n" => {js|ñ|js}
    | "?" => {js|¿|js}
    | "!" => {js|¡|js}
    | _ => "";
  }

};
