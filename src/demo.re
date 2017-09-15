/* 
   Goal: 
     conjugate('estudiar', { tense: 'present', subject: 'ella' });
       should return estudia
 */

type ending = 
| Ar
| Er
| Ir;

module Subject = {
  /* The type name becomes just `t` to avoid repetition when accessed from outside the module */
  type t =
    | Yo
    | Tu
    | Ella
    | Nosotras
    | Vosotras
    | Ellas;
  let ofString = 
    fun
    | "yo" => Yo
    | "tu" => Tu
    | "ella" => Ella
    | "nosotras" => Nosotras
    | "vosotras" => Vosotras
    | _ => Ellas
};

let getEndingVariant ending => {
  switch ending {
    | "ar" => Ar
    | "er" => Er
    | _ => Ir
  }
};

let genPresentEnding ending subject => {
  switch (subject:Subject.t, ending) {
    | (Yo, _) => "o"
    | (Tu, Ar) => "as"
    | (Tu, _) => "es"
    | (Ella, Ar) => "a"
    | (Ella, _) => "e"
    | (Nosotras, _) => "amos"
    | (Vosotras, _) => "\195\161is"
    | (Ellas, _) => "an"
  }
};

let conjugate word info => {
  let start = ( String.length word) - 2;
  let endingType = getEndingVariant (String.sub word start 2);
  let stem = (String.sub word 0 start);
  let subject = Subject.ofString info##subject;
  switch info##tense {
    | "present" => stem ^ (genPresentEnding endingType subject)
  }
};

