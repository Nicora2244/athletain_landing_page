/* ─────────────────────────────────────────────────────────────
   POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
   NIT 901.939.261-5 · Versión 01 · 27/01/2026
   Contenido sincronizado con la app (src/data/legalDocuments.js → PRIVACY_POLICY).
   Ley 1581 de 2012 · Decreto 1074 de 2015.
   ───────────────────────────────────────────────────────────── */

export type PolicySection = {
  title: string;
  content: string;
};

export type PolicyDocument = {
  version: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  summary: string;
  sections: PolicySection[];
};

export const DOCUMENT_VERSION = '01';

export const PRIVACY_POLICY: PolicyDocument = {
  version: DOCUMENT_VERSION,
  title: 'Política de Tratamiento de Datos Personales',
  subtitle: 'ATHLETAIN · NIT 901.939.261-5 · Versión 01',
  lastUpdated: '27 de enero de 2026',
  summary:
    'ATHLETAIN tratará tus datos personales, incluidos datos sensibles como información biométrica, imágenes, videos, métricas deportivas y datos de salud, conforme a esta Política y a la Ley 1581 de 2012. En el caso de menores de edad, el tratamiento se realizará únicamente con autorización del representante legal. Tienes derecho a conocer, actualizar, rectificar, suprimir tus datos y revocar esta autorización escribiendo a support@athletain.com.',
  sections: [
    {
      title: '1. Introducción',
      content: `ATHLETAIN es una plataforma digital diseñada para facilitar la visibilidad, proyección y conexión profesional entre deportistas y cazatalentos, agentes, clubes, entrenadores y demás actores del gremio deportivo, tanto en Colombia como en el exterior. En el desarrollo de sus actividades, ATHLETAIN recolecta, almacena, usa, circula y, en general, realiza operaciones de tratamiento sobre datos personales y sensibles de sus usuarios.

Los datos tratados por ATHLETAIN comprenden información de identificación, contacto, historial deportivo, métricas de rendimiento, datos provenientes de dispositivos tecnológicos (wearables), así como imágenes, fotografías, videos, clips deportivos y demás contenido audiovisual. Algunos de estos datos pueden constituir datos sensibles, incluyendo información biométrica, datos relacionados con la salud o el desempeño físico, y datos de menores de edad, cuyo tratamiento exige medidas reforzadas de protección conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.

Como titular de su información personal, cada usuario conserva el derecho constitucional y legal a conocer, actualizar, rectificar y suprimir sus datos personales, así como a revocar la autorización otorgada para su tratamiento. En consecuencia, ATHLETAIN adopta la presente Política de Tratamiento de Datos Personales con el fin de garantizar el respeto de dichos derechos y asegurar que todas las operaciones de tratamiento se realicen conforme a los principios, deberes y obligaciones previstos en la normativa colombiana de protección de datos personales.`,
    },
    {
      title: '2. Definiciones',
      content: `• Autorización: Consentimiento previo, expreso e informado otorgado por el Titular para permitir a ATHLETAIN realizar el Tratamiento de sus datos personales. En el caso de menores de edad, la autorización deberá ser otorgada por su representante legal.

• Aviso de Privacidad: Comunicación mediante la cual ATHLETAIN informa al Titular sobre la existencia de esta Política de Tratamiento de Datos Personales y las finalidades del tratamiento.

• Base de Datos: Conjunto organizado de datos personales tratados por ATHLETAIN en el marco de su operación.

• Dato Personal: Cualquier información vinculada o que pueda asociarse a una persona natural determinada o determinable.

• Dato Sensible: Información que afecta la intimidad del Titular o cuyo uso indebido puede generar discriminación. Para ATHLETAIN, se consideran sensibles: datos biométricos (rostro, voz, huella, patrones corporales); datos relacionados con salud o rendimiento físico; métricas deportivas provenientes de wearables; imágenes o videos que revelen información íntima o de menores de edad.

• Dato Privado: Información personal de naturaleza íntima o reservada cuyo conocimiento solo es relevante para el Titular.

• Encargado del Tratamiento: Persona natural o jurídica que realiza el Tratamiento de datos personales por cuenta de ATHLETAIN, incluyendo proveedores tecnológicos, servicios de almacenamiento en la nube y plataformas de verificación de identidad.

• Responsable del Tratamiento: ATHLETAIN, como persona jurídica que decide sobre la recolección, almacenamiento, uso, circulación, supresión y demás operaciones relacionadas con los datos personales tratados en la Plataforma.

• Titular: Persona natural cuyos datos personales son objeto de Tratamiento por parte de ATHLETAIN. Incluye deportistas, cazatalentos nacionales y extranjeros, representantes legales de menores, proveedores y cualquier usuario registrado en la Plataforma.

• Tratamiento: Cualquier operación o conjunto de operaciones sobre datos personales, tales como recolección, almacenamiento, uso, circulación, transmisión, transferencia, análisis, reproducción o supresión.

• Transferencia Internacional de Datos: Envío de datos personales a un tercero ubicado fuera de Colombia que actúa como Responsable del Tratamiento.

• Transmisión Internacional de Datos: Comunicación de datos personales a un Encargado ubicado fuera de Colombia para que realice el Tratamiento por cuenta de ATHLETAIN.

• Habeas Data: Derecho fundamental que tiene toda persona para conocer, actualizar, rectificar y suprimir la información personal que haya sido objeto de Tratamiento por parte de ATHLETAIN.`,
    },
    {
      title: '3. Habeas Data',
      content: `El derecho fundamental al Habeas Data se encuentra consagrado en el artículo 15 de la Constitución Política de Colombia, el cual establece que todas las personas tienen derecho a su intimidad personal y familiar, a su buen nombre y a exigir que el Estado y los particulares respeten y garanticen dichos derechos.

En virtud de este derecho, los usuarios de ATHLETAIN pueden ejercer control sobre los datos que suministran o que son tratados por la Plataforma. El Habeas Data protege la autodeterminación informativa del Titular, su honra, su intimidad y su libertad.

ATHLETAIN reconoce la importancia de este derecho y adopta medidas técnicas, humanas y administrativas para garantizar que el tratamiento de los datos personales se realice de manera adecuada, segura y conforme a los principios establecidos en la Ley 1581 de 2012 y sus normas reglamentarias.`,
    },
    {
      title: '4. Objetivos de la Política',
      content: `La presente Política tiene como objetivo establecer los lineamientos bajo los cuales ATHLETAIN realiza el tratamiento de los datos personales de sus usuarios, incluyendo deportistas, cazatalentos nacionales y extranjeros, representantes legales de menores y demás personas naturales que interactúan con la Plataforma. En este documento se informan las finalidades del tratamiento, los derechos de los Titulares y los procedimientos para ejercerlos.

ATHLETAIN adopta medidas técnicas, humanas, administrativas y jurídicas para garantizar que los datos personales, incluidos datos sensibles, biométricos, audiovisuales y datos de menores, sean tratados de manera segura, confidencial y conforme a la Ley 1581 de 2012 y sus normas reglamentarias.`,
    },
    {
      title: '5. Ámbito de Aplicación',
      content: `La presente Política aplica a todos los datos personales y datos sensibles recolectados, almacenados, usados, circulados, transmitidos o suprimidos por ATHLETAIN en el marco de su operación. Esto incluye la información suministrada por deportistas, cazatalentos nacionales y extranjeros, representantes legales de menores de edad, proveedores y cualquier otro usuario que interactúe con la Plataforma.

Esta Política cubre el tratamiento de datos personales contenidos en las bases de datos administradas por ATHLETAIN, así como aquellos tratados por terceros que actúen como Encargados del Tratamiento. Su aplicación se extiende a todas las actividades realizadas dentro del territorio colombiano y a las operaciones que involucren transferencias o accesos internacionales.`,
    },
    {
      title: '6. Titulares de la Información',
      content: `Los Titulares cuyos datos personales son tratados por ATHLETAIN incluyen:

6.1. Deportistas: Personas naturales que crean un perfil en la Plataforma para exhibir sus habilidades, trayectoria, estadísticas, métricas deportivas y contenido audiovisual.

6.2. Cazatalentos, agentes, clubes, entrenadores y demás actores del ecosistema deportivo: Personas naturales o jurídicas, nacionales o extranjeras, que utilizan la Plataforma para identificar, contactar o evaluar deportistas.

6.3. Menores de edad usuarios de la Plataforma: Deportistas menores de edad cuyos datos personales son tratados con autorización previa, expresa y verificable de su representante legal.

6.4. Representantes legales de menores de edad: Personas naturales que otorgan la autorización para el tratamiento de los datos personales de los menores.

6.5. Proveedores y aliados estratégicos: Personas naturales que suministran bienes o servicios a ATHLETAIN, incluyendo proveedores tecnológicos, servicios de hosting y de cloud hosting.

6.6. Trabajadores y colaboradores: Personas naturales vinculadas laboralmente con ATHLETAIN.

6.7. Contratistas y prestadores de servicios independientes: Personas naturales que prestan servicios a ATHLETAIN mediante contratos civiles o comerciales.`,
    },
    {
      title: '7. Principios Rectores del Tratamiento',
      content: `ATHLETAIN consagra los siguientes principios rectores del tratamiento de los datos personales:

a. Principio de Legitimación: El Tratamiento se sujeta a la Ley 1581 de 2012, el Decreto 1074 de 2015 y demás normas aplicables. Ningún dato será tratado sin fundamento legal o sin la autorización correspondiente del Titular.

b. Principio de Finalidad: El Tratamiento se realizará para finalidades legítimas, informadas y necesarias para el funcionamiento de la Plataforma.

c. Principio de Libertad: ATHLETAIN solo tratará datos personales con autorización previa, expresa e informada del Titular. El silencio o la inactividad del usuario no se entenderán como autorización.

d. Principio de Transparencia: ATHLETAIN garantiza al Titular el derecho a obtener, en cualquier momento, información sobre la existencia y el tratamiento de sus datos personales.

e. Principio de Veracidad: La información tratada deberá ser veraz, completa, exacta, actualizada y comprensible.

f. Principio de Acceso y Circulación Restringida: El Tratamiento se realizará únicamente por personas autorizadas y para las finalidades informadas.

g. Principio de Confidencialidad: Todas las personas que intervengan en el Tratamiento están obligadas a garantizar la reserva de la información, incluso después de finalizada su relación con ATHLETAIN.

h. Principio de Caducidad: Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir las finalidades informadas. Una vez cumplida la finalidad, los datos serán suprimidos o anonimizados.

i. Principio de Interpretación Integral con las Normas Constitucionales: Los derechos de los Titulares serán interpretados en armonía con la Constitución Política, especialmente con los derechos a la intimidad, honra, buen nombre, libertad y Habeas Data.`,
    },
    {
      title: '8. Recolección del Dato Personal',
      content: `a. Recolección directa: ATHLETAIN actúa como responsable del tratamiento de los datos personales cuando el titular suministra la información directamente.

b. Recolección por conducto de terceros: ATHLETAIN podrá recibir datos personales a través de terceros que actúan en diferentes roles dentro del ecosistema deportivo, tales como clubes, academias, entrenadores, representantes legales, agentes o proveedores tecnológicos.

c. Tratamiento de datos sensibles: Se consideran datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar discriminación. En el contexto de ATHLETAIN, esta categoría incluye: datos biométricos; información relacionada con la salud, el estado físico, lesiones o métricas de rendimiento deportivo; datos provenientes de dispositivos tecnológicos o wearables; información de menores de edad; y fotografías, videos o contenido audiovisual que pueda revelar información íntima.

El tratamiento de datos sensibles solo se realizará con autorización previa, expresa y explícita del Titular, o del representante legal en el caso de menores de edad.

d. Protección especial de datos de menores de edad: El registro y uso de ATHLETAIN por parte de un menor de edad requiere la autorización previa, expresa y verificable de su representante legal. ATHLETAIN solo tratará datos personales de menores cuando la finalidad esté directamente relacionada con su participación en actividades deportivas y el funcionamiento general de la Plataforma.

e. Tratamiento de datos biométricos: El tratamiento de datos biométricos en ATHLETAIN se realiza exclusivamente para finalidades legítimas y necesarias para el funcionamiento de la Plataforma, tales como la creación y autenticación de perfiles y la generación de métricas deportivas.

f. Tratamiento de imágenes, videos y contenido audiovisual: Este tipo de contenido puede incluir datos personales, datos sensibles y datos biométricos, por lo que su tratamiento se realiza bajo criterios de protección reforzada. El contenido audiovisual será utilizado exclusivamente para las finalidades informadas al Titular.

g. Tratamiento de datos de usuarios extranjeros: El tratamiento de datos de usuarios ubicados fuera de Colombia se realizará conforme a la Ley 1581 de 2012, el Decreto 1074 de 2015 y las normas colombianas aplicables.`,
    },
    {
      title: '9. Tipo de Información que Tratamos',
      content: `ATHLETAIN puede recolectar, almacenar, usar, circular o suprimir la siguiente información personal, clasificada según su naturaleza:

Datos de Deportistas (mayores y menores de edad): nombres y apellidos, documento de identidad, nombre del representante legal (si aplica), fecha y lugar de nacimiento, nacionalidad, dirección y ciudad de residencia, teléfono o celular, correo electrónico, fotografías, videos deportivos, grabaciones de voz, métricas deportivas, información de salud o lesiones, redes sociales, estadísticas deportivas, club o institución a la que pertenece.

Datos de Cazatalentos, Agentes, Clubes y Entrenadores: nombres y apellidos o razón social, documento de identidad o NIT, fecha y lugar de nacimiento, nacionalidad, dirección y ciudad de residencia, teléfono o celular, correo electrónico, fotografías, videos, grabaciones de voz, cargo (agente, scout, entrenador), club o institución, certificaciones o licencias deportivas, historial profesional.

Datos de Proveedores y Aliados Tecnológicos: nombre y apellido o razón social, documento de identidad o NIT, dirección, teléfono, correo electrónico, información contractual, información financiera para pagos.`,
    },
    {
      title: '10. Finalidades del Tratamiento de la Información',
      content: `Los datos personales de deportistas, cazatalentos, agentes, clubes, entrenadores, representantes legales, proveedores, aliados tecnológicos, empleados y contratistas que ATHLETAIN recolecta serán tratados para:

10.1. Recolectar, registrar y almacenar los datos necesarios para la creación, administración y funcionamiento de los perfiles dentro de la Plataforma.

10.2. Permitir la interacción entre deportistas y cazatalentos, incluyendo la visualización de perfiles, métricas deportivas y contenido audiovisual.

10.3. Procesar, analizar y mostrar métricas deportivas, estadísticas, videos, fotografías y demás contenido para efectos de evaluación deportiva y visibilidad profesional.

10.4. Gestionar la autenticación, verificación de identidad y seguridad de los usuarios, incluyendo el uso de datos biométricos cuando aplique.

10.5. Administrar la relación con proveedores y aliados tecnológicos que prestan servicios a la Plataforma.

10.6. Realizar procesos administrativos, contables, contractuales y de facturación relacionados con la operación de ATHLETAIN.

10.7. Mantener comunicación con los usuarios, enviar notificaciones sobre la Plataforma, actualizaciones y mensajes operativos.

10.8. Realizar análisis estadísticos de uso, rendimiento y comportamiento para mejorar la experiencia del usuario.

10.9. Conservar registros históricos, respaldos y trazabilidad de la actividad de los usuarios para fines de seguridad, auditoría y cumplimiento normativo.

10.10. Verificar, validar y actualizar la información suministrada por los usuarios.

10.11. Realizar transmisiones o transferencias nacionales e internacionales de datos cuando sean necesarias para la operación de la Plataforma.

10.12. Para las demás finalidades autorizadas expresamente por el Titular o permitidas por la legislación vigente.`,
    },
    {
      title: '11. Tratamiento del Dato Personal',
      content: `Al aceptar esta Política, los Titulares autorizan de manera previa, expresa e informada a ATHLETAIN para realizar el tratamiento de sus datos personales conforme a las finalidades descritas. Este tratamiento incluye la recolección, almacenamiento, uso, análisis, circulación, transmisión, transferencia y supresión de la información cuando sea necesario para la operación de la Plataforma.

ATHLETAIN podrá actuar como Responsable o Encargado del Tratamiento, según corresponda, y en ambos casos cumplirá con las obligaciones establecidas por la normativa de protección de datos personales. La Plataforma se abstendrá de divulgar información personal a terceros no autorizados y solo compartirá datos cuando exista autorización del Titular o una obligación legal que así lo exija.

ATHLETAIN velará porque los terceros que reciban información personal cumplan con estándares adecuados de protección y seguridad. En ningún caso se compartirán datos sensibles sin autorización expresa del Titular o sin que exista un fundamento legal que lo permita.`,
    },
    {
      title: '12. Transferencia y Transmisión Internacional de Datos Personales',
      content: `ATHLETAIN podrá realizar transferencias y transmisiones internacionales de datos personales cuando ello sea necesario para el funcionamiento de la Plataforma, la prestación de sus servicios o la interacción entre deportistas y cazatalentos ubicados en otros países. Estas operaciones se llevarán a cabo conforme a la Ley 1581 de 2012, el Decreto 1074 de 2015 y las normas que regulan la protección de datos personales en Colombia.

Cuando los datos sean enviados a terceros ubicados en el exterior que actúen como Responsables, ATHLETAIN realizará una transferencia internacional, garantizando que dichos terceros cuenten con estándares adecuados de protección.

Cuando los datos sean enviados a proveedores tecnológicos, plataformas de hosting, cloud hosting, servicios de analítica, verificación de identidad u otros aliados que actúen como Encargados, se realizará una transmisión internacional bajo relaciones que aseguren la confidencialidad, seguridad y el cumplimiento de las obligaciones legales.

En todos los casos, ATHLETAIN adoptará medidas para asegurar que el receptor de la información implemente niveles adecuados de protección, y que el tratamiento se realice únicamente para las finalidades autorizadas.`,
    },
    {
      title: '13. Mecanismos de Protección de la Información',
      content: `ATHLETAIN implementa medidas técnicas, humanas y administrativas para proteger los datos personales contra acceso no autorizado, pérdida, adulteración, uso indebido o divulgación no permitida. Estas medidas incluyen controles de acceso, cifrado, monitoreo, autenticación reforzada y protocolos de seguridad aplicables al contenido audiovisual, biométrico y a la información de menores.

La información recolectada es almacenada en servicios de infraestructura tecnológica y proveedores de nube que cumplen con estándares internacionales de seguridad y protección de datos. El acceso a la información está restringido exclusivamente al personal autorizado y a los proveedores tecnológicos que actúan como Encargados del Tratamiento bajo acuerdos de confidencialidad y seguridad.`,
    },
    {
      title: '14. Derechos de los Titulares de la Información',
      content: `Los Titulares cuyos datos personales sean tratados por ATHLETAIN, conforme a la Ley 1581 de 2012 y sus normas reglamentarias, tienen derecho a:

14.1. Conocer, actualizar y rectificar sus datos personales cuando sean parciales, inexactos, incompletos, fraccionados, induzcan a error o cuando su tratamiento no esté autorizado.

14.2. Ser informados sobre el uso que ATHLETAIN da a sus datos personales, incluyendo datos sensibles, biométricos y contenido audiovisual.

14.3. Presentar consultas, quejas o reclamos ante la Superintendencia de Industria y Comercio cuando consideren que existe una infracción a la normativa de protección de datos personales.

14.4. Revocar la autorización otorgada o solicitar la supresión de sus datos cuando no exista un deber legal o contractual que obligue a su conservación.

14.5. Acceder de manera gratuita a los datos personales que hayan sido objeto de tratamiento por parte de ATHLETAIN.

14.6. Solicitar prueba de la autorización otorgada para el tratamiento de sus datos, salvo en los casos en los que la ley no exija dicha autorización.`,
    },
    {
      title: '15. Procedimiento para Peticiones, Consultas o Reclamos',
      content: `Los Titulares que deseen ejercer sus derechos o presentar una petición, consulta o reclamo relacionado con el tratamiento de sus datos personales podrán hacerlo mediante el correo electrónico oficial: support@athletain.com

La solicitud deberá incluir, como mínimo: nombres y apellidos del Titular; tipo y número de identificación; datos de contacto (correo electrónico y número de teléfono); asunto; descripción clara de la solicitud, consulta o reclamo; y documentos o soportes que el Titular considere pertinentes.

Cuando se trate de datos personales de menores de edad, las solicitudes deberán ser presentadas por su representante legal, quien deberá acreditar dicha calidad.

ATHLETAIN dará respuesta a las consultas dentro de un plazo máximo de diez (10) días hábiles, prorrogables por cinco (5) días hábiles adicionales cuando sea necesario.`,
    },
    {
      title: '16. Autorización del Titular',
      content: `Antes de realizar cualquier tratamiento de datos personales, ATHLETAIN solicitará al Titular, o al representante legal en el caso de menores de edad, una autorización previa, expresa e informada, indicando de manera clara las finalidades para las cuales se recolecta y utiliza la información. Esta autorización podrá otorgarse mediante mecanismos digitales, formularios electrónicos, casillas de verificación, registros en la aplicación o cualquier medio que permita conservar prueba de su otorgamiento.

El Titular es responsable de la veracidad, exactitud y completitud de la información que suministra. En consecuencia, ATHLETAIN no será responsable por los perjuicios derivados de datos falsos, inexactos, incompletos o no actualizados proporcionados por el Titular o por su representante legal.`,
    },
    {
      title: '17. Aviso de Privacidad',
      content: `ATHLETAIN informa al Titular que sus datos personales, incluidos datos sensibles como información biométrica, imágenes, videos, métricas deportivas y datos relacionados con la salud o el rendimiento físico, serán tratados conforme a la Política de Tratamiento de Datos Personales disponible en la plataforma web de ATHLETAIN. En el caso de menores de edad, el tratamiento se realizará únicamente con la autorización previa y verificable del representante legal.

Responsable del Tratamiento: ATHLETAIN.

Finalidades principales: Creación y administración de cuenta del usuario; gestión de perfiles deportivos, contenido audiovisual, interacción entre usuarios y análisis de métricas; implementar medidas de seguridad y verificación; y permitir la interacción entre deportistas, cazatalentos y representantes.

Derechos del Titular: Conocer, actualizar, rectificar, suprimir datos y revocar la autorización.

Canales de contacto: support@athletain.com`,
    },
    {
      title: '18. Consecuencias de la Aceptación',
      content: `Los usuarios de la Plataforma que acepten esta Política y continúen con los procedimientos de registro, uso o suministro de información:

18.1. Declaran que conocen, comprenden y aceptan el contenido de la Política de Tratamiento de Datos Personales de ATHLETAIN.

18.2. Manifiestan que han otorgado su consentimiento libre, previo, expreso e informado para la recolección y tratamiento de sus datos personales, incluidos datos sensibles, biométricos, audiovisuales y, en el caso de menores, aquellos suministrados por su representante legal.

18.3. Expresan que la información registrada en la Plataforma les pertenece, es veraz y actual, o que cuentan con la autorización válida para suministrarla a ATHLETAIN cuando actúan en nombre de un tercero, especialmente en el caso de menores de edad.

18.4. Declaran que cada uno de los datos proporcionados es cierto, completo y corresponde a la realidad, asumiendo la responsabilidad por su exactitud.`,
    },
    {
      title: '19. Modificaciones a la Política',
      content: `ATHLETAIN se reserva el derecho de modificar, actualizar o complementar en cualquier momento la presente Política de Tratamiento de Datos Personales. Cualquier cambio será publicado en los canales oficiales de la Plataforma, incluyendo su sitio web y/o aplicación móvil, y entrará en vigor desde su divulgación.

Cuando las modificaciones impliquen cambios sustanciales en las finalidades del tratamiento o en las condiciones bajo las cuales fue otorgada la autorización, ATHLETAIN solicitará nuevamente el consentimiento de los Titulares, conforme a la normativa aplicable.`,
    },
    {
      title: '20. Término de Vigencia de las Bases de Datos',
      content: `Los datos personales recolectados por ATHLETAIN se almacenan en sistemas digitales, servidores en la nube y/o infraestructuras tecnológicas utilizadas por la Plataforma, bajo medidas de seguridad técnicas, administrativas y jurídicas.

Independientemente del medio de almacenamiento, los datos personales serán conservados únicamente durante el tiempo necesario para cumplir con las finalidades informadas al Titular. Una vez dichas finalidades se hayan agotado, los datos podrán ser suprimidos dentro de los plazos establecidos por la ley, teniendo en cuenta la naturaleza de la información (contable, financiera, contractual, laboral o de seguridad social).`,
    },
    {
      title: '21. Vigencia de la Política',
      content: `La presente Política de Tratamiento de Datos Personales entra en vigor a partir de su publicación el 27/01/2026 por parte de ATHLETAIN y permanecerá vigente hasta que sea modificada o reemplazada por una nueva versión. Esta Política sustituye cualquier versión previa adoptada por la Plataforma.`,
    },
    {
      title: '22. Legislación Aplicable',
      content: `La presente Política de Tratamiento de Datos Personales se rige por la legislación de la República de Colombia, en especial por la Ley 1581 de 2012, el Decreto 1074 de 2015 y las demás normas que regulan la protección de datos personales, así como por las directrices y circulares emitidas por la Superintendencia de Industria y Comercio (SIC).

Cualquier interpretación, aplicación o controversia relacionada con esta Política se someterá exclusivamente a las autoridades competentes en Colombia.`,
    },
  ],
};
