type subject = 
| Yo
| Tu
| Ella
| Nosotras
| Vosotras
| Ellas;

type ending = 
| Ar
| Er
| Ir;

let getSubjectVariant subject => {
  switch subject {
    | "yo" => Yo
    | "tu" => Tu
    | "ella" => Ella
    | "nosotras" => Nosotras
    | "vosotras" => Vosotras
    | _ => Ellas
  }
};

let getEndingVariant ending => {
  switch ending {
    | "ar" => Ar
    | "er" => Er
    | _ => Ir
  }
};

let genPresentEnding ending subject => {
  Js.log("subject", subject);
  switch subject {
    | Yo => "o"
    | Tu => switch ending {
      | Ar => "as"
      | _ => "es"
      }
    | Ella => switch ending {
      | Ar => "a"
      | _ => "e"
      }
    | Nosotras =>  "amos"
    | Vosotras =>  "áis"
    | Ellas =>  "an"
  }
};

let conjugate word info => {
  let start = ( String.length word) - 2;
  let endingType = getEndingVariant (String.sub word start 2);
  let stem = (String.sub word 0 start);
  let subject = (getSubjectVariant info##subject);
  switch info##tense {
    | "present" => stem ^ (genPresentEnding endingType subject)
  }
};

/* 
   Sample: 
     conjugate('estudiar', { tense: 'present', subject: 'ella' });
       should return estudia
 */
