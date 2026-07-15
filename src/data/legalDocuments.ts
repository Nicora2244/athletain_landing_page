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

export const DOCUMENT_VERSION = "01";

/* ─────────────────────────────────────────────────────────────
   TÉRMINOS Y CONDICIONES
   NIT 901.939.261-5 · Versión 01 · 27/01/2026
   ───────────────────────────────────────────────────────────── */
export const TERMS_AND_CONDITIONS: PolicyDocument = {
  version: DOCUMENT_VERSION,
  title: "Términos y Condiciones de Uso",
  subtitle: "ATHLETAIN · NIT 901.939.261-5 · Versión 01",
  lastUpdated: "27 de enero de 2026",
  summary:
    "Al crear tu cuenta aceptas las reglas de uso de ATHLETAIN: suministrar información veraz, respetar a otros usuarios y la propiedad intelectual de la Plataforma. Si el deportista es menor de edad, el registro debe realizarse a través de su representante legal. La aceptación constituye un acuerdo jurídicamente vinculante conforme a la ley colombiana.",
  sections: [
    {
      title: "1. Objeto y Alcance",
      content: `El presente documento establece los Términos y Condiciones de Uso que regulan el acceso y utilización de ATHLETAIN, una plataforma digital diseñada para facilitar la gestión, exhibición y proyección del talento deportivo, permitiendo que deportistas, cazatalentos, clubes, agentes, entrenadores y otros actores del entorno deportivo interactúen de manera segura, transparente y conforme a la normativa aplicable.

ATHLETAIN ofrece herramientas para la creación de perfiles deportivos, la carga y visualización de contenido audiovisual, el análisis de métricas de rendimiento, la conexión entre usuarios y la gestión de oportunidades deportivas, sin garantizar resultados específicos ni intervenir en decisiones de terceros.

El acceso y uso de la Plataforma implica la aceptación plena y sin reservas de estos Términos y Condiciones. Cuando el usuario sea un menor de edad, el acceso, registro y uso de la Plataforma deberán realizarse exclusivamente a través de su representante legal, quien acepta y asume las obligaciones derivadas de este documento en nombre del menor.

Estos Términos y Condiciones son aplicables a todos los servicios, funcionalidades y contenidos ofrecidos por ATHLETAIN, independientemente del dispositivo o medio a través del cual se acceda. Su aceptación constituye un acuerdo jurídicamente vinculante entre el Usuario (o su representante legal) y ATHLETAIN.`,
    },
    {
      title: "2. Definiciones",
      content: `Para efectos de estos Términos y Condiciones, los siguientes conceptos tendrán el significado que aquí se establece:

• ATHLETAIN: Plataforma digital que permite la creación, gestión y exhibición de perfiles deportivos, la carga y visualización de contenido audiovisual, la interacción entre usuarios y la identificación de oportunidades deportivas mediante herramientas tecnológicas de análisis y conexión.

• USUARIO: Persona natural o jurídica que accede, navega o utiliza la Plataforma. Incluye deportistas, cazatalentos, clubes, agentes, entrenadores y cualquier otro actor del ecosistema deportivo.

• USUARIO DEPORTISTA: Persona natural que crea un perfil deportivo en la Plataforma para exhibir su trayectoria, estadísticas, contenido audiovisual y demás información relacionada con su actividad deportiva.

• USUARIO PROFESIONAL (Cazatalento, Club, Agente o Entrenador): Persona natural o jurídica que utiliza la Plataforma para identificar, evaluar o contactar deportistas, sin que ello implique relación laboral, contractual o de representación con ATHLETAIN.

• MENOR DE EDAD: Persona natural que, conforme a la legislación aplicable, no ha alcanzado la mayoría de edad y cuyo acceso, registro y uso de la Plataforma debe realizarse exclusivamente a través de su Representante Legal.

• REPRESENTANTE LEGAL: Persona que ejerce la patria potestad, custodia o representación legítima del menor de edad y que actúa en su nombre para efectos del registro, uso de la Plataforma y aceptación de los presentes Términos y Condiciones.

• CUENTA: Perfil individual creado por el Usuario (o su Representante Legal) para acceder a los servicios de ATHLETAIN, incluyendo credenciales de acceso, información personal y contenido asociado.

• CONTENIDO: Toda información, datos, textos, imágenes, audios, videos, métricas, estadísticas, comentarios o cualquier material que el Usuario cargue, genere o comparta dentro de la Plataforma.

• CONTENIDO AUDIOVISUAL: Fotografías, videos, clips deportivos, grabaciones de voz o cualquier material multimedia que represente la imagen, voz o actividad del Usuario.

• DATOS PERSONALES: Información que permite identificar o hacer identificable a una persona natural, conforme a la legislación colombiana de protección de datos.

• DATOS SENSIBLES: Datos que afectan la intimidad del Usuario o cuyo uso indebido puede generar discriminación, incluyendo información biométrica, de salud, métricas corporales o cualquier dato especialmente protegido por la ley.

• SERVICIOS: Funcionalidades ofrecidas por ATHLETAIN, incluyendo creación de perfiles, carga de contenido, análisis de métricas, interacción entre usuarios, visualización de perfiles y demás herramientas tecnológicas disponibles en la Plataforma.

• POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES: Documento que regula la recolección, uso, almacenamiento, circulación y supresión de los datos personales tratados por ATHLETAIN, y que hace parte integral de estos Términos y Condiciones.`,
    },
    {
      title: "3. Aceptación de los Términos y Condiciones",
      content: `3.1. Momento y forma de aceptación
El acceso, registro y uso de ATHLETAIN implica la aceptación plena, expresa y sin reservas de los presentes Términos y Condiciones. La aceptación se formaliza mediante la marcación de las casillas de verificación dispuestas en el proceso de registro o mediante el uso continuado de la Plataforma. El Usuario reconoce que la aceptación constituye un acuerdo jurídicamente vinculante y que, en caso de no estar de acuerdo con estos Términos, debe abstenerse de utilizar la Plataforma.

3.2. Aceptación por parte del representante legal
Cuando el Usuario sea un menor de edad, el registro, acceso y uso de la Plataforma deberán realizarse exclusivamente a través de su Representante Legal, quien acepta estos Términos y Condiciones en nombre del menor y asume la responsabilidad derivada de su uso. El Representante Legal declara que actúa en ejercicio de la patria potestad o representación legítima y que ha informado al menor, conforme a su nivel de madurez, sobre el uso de la Plataforma y sus implicaciones.

3.3. Relación con la Política de Tratamiento de Datos Personales
La aceptación de estos Términos y Condiciones implica también la aceptación de la Política de Tratamiento de Datos Personales de ATHLETAIN, la cual regula la recolección, uso, almacenamiento, circulación y supresión de los datos personales del Usuario o del menor representado. La Política de Tratamiento de Datos hace parte integral de este documento y debe ser leída y comprendida antes de continuar con el uso de la Plataforma.

3.4. Vigencia de los Términos y Condiciones
Estos Términos y Condiciones estarán vigentes desde el momento de su aceptación y permanecerán aplicables mientras el Usuario mantenga una cuenta activa o continúe utilizando la Plataforma. ATHLETAIN podrá modificar estos Términos en cualquier momento, y las versiones actualizadas serán notificadas a los Usuarios a través de los medios disponibles en la Plataforma o a través del correo electrónico registrado. El uso continuado después de la publicación de cambios constituye aceptación de la versión vigente.`,
    },
    {
      title: "4. Registro, Cuenta y Verificación de Identidad",
      content: `El acceso a las funcionalidades de ATHLETAIN requiere la creación de una Cuenta, proceso en el cual el Usuario debe suministrar información veraz, completa y actualizada. El registro implica la generación de credenciales personales e intransferibles, cuya custodia es responsabilidad exclusiva del Usuario.

4.1. Requisitos de registro y veracidad de la información
El Usuario declara que toda la información proporcionada durante el registro y uso de la Plataforma es auténtica y corresponde a su identidad real. Está prohibido suministrar datos falsos, incompletos, desactualizados o que induzcan a error.

4.2. Prohibición de suplantación
Queda estrictamente prohibido crear cuentas en nombre de terceros, utilizar identidades ajenas, manipular información o realizar cualquier conducta que pueda constituir suplantación.

4.3. Reglas especiales para menores de edad
El registro de un menor de edad solo podrá realizarse a través de su Representante Legal, quien será responsable de: (i) crear y administrar la Cuenta del menor; (ii) aceptar los Términos y Condiciones y las autorizaciones correspondientes; (iii) supervisar el uso de la Plataforma; y (iv) garantizar que el menor comprenda, en la medida de su madurez, el funcionamiento de ATHLETAIN.

4.4. Recuperación de cuenta
En caso de pérdida de acceso, el Usuario podrá solicitar la recuperación de su Cuenta mediante los mecanismos habilitados por ATHLETAIN. ATHLETAIN no será responsable por la imposibilidad de recuperar una Cuenta cuando el Usuario no pueda acreditar su titularidad.

4.5. Cierre voluntario de cuenta
El Usuario o el Representante Legal del menor podrá solicitar en cualquier momento el cierre de la Cuenta. El cierre no afectará la validez de las acciones realizadas antes de la solicitud ni las obligaciones legales o contractuales pendientes.`,
    },
    {
      title: "5. Reglas de Conducta de los Usuarios",
      content: `El uso de ATHLETAIN exige un comportamiento respetuoso, seguro y acorde con la finalidad deportiva de la Plataforma.

5.1. Comportamientos permitidos
El Usuario podrá: crear y administrar su perfil deportivo; cargar contenido relacionado con su actividad deportiva siempre que sea veraz y apropiado; interactuar con otros Usuarios dentro de los límites establecidos; y utilizar las funcionalidades exclusivamente para fines deportivos, formativos o de evaluación de talento.

5.2. Prohibiciones
El Usuario se obliga a abstenerse de:
(a) Publicar contenido violento, sexual, erótico, sugestivo, discriminatorio o inapropiado para menores.
(b) Establecer contacto inapropiado con menores (grooming, acoso, manipulación).
(c) Suplantación de identidad: crear perfiles falsos o utilizar datos de terceros sin autorización.
(d) Divulgar datos personales de terceros sin su consentimiento expreso.
(e) Alterar, falsificar o manipular estadísticas, resultados, videos o métricas deportivas.
(f) Usar spam, bots, scripts o herramientas de scraping.
(g) Realizar actividades comerciales no autorizadas: publicidad, venta de productos o captación de clientes.

5.3. Obligación de reportar conductas indebidas
El Usuario se compromete a reportar de manera inmediata cualquier conducta inapropiada, especialmente cuando involucre a menores de edad.`,
    },
    {
      title: "6. Contenido Generado por el Usuario",
      content: `ATHLETAIN permite que los Usuarios carguen, generen y compartan contenido relacionado con su actividad deportiva. El Usuario reconoce que es el único responsable del contenido que publique.

6.1. Responsabilidad del Usuario por su contenido
El Usuario garantiza que el contenido que cargue: es de su autoría o cuenta con las autorizaciones necesarias; no vulnera derechos de terceros; y es veraz, respetuoso y adecuado para un entorno deportivo que incluye menores de edad.

6.2. Facultades de ATHLETAIN
ATHLETAIN podrá revisar, eliminar o bloquear contenido que considere inapropiado, ilegal o riesgoso, y suspender o cancelar cuentas que incurran en conductas reiteradas o graves.

6.3. Procedimiento de reporte y revisión
Cualquier Usuario podrá reportar contenido inapropiado. ATHLETAIN evaluará el reporte y podrá eliminar el contenido, suspender la Cuenta del infractor o informar a las autoridades competentes.

6.4. Contenido prohibido
Está prohibido publicar: contenido violento, sexual o inapropiado para menores; información que promueva discriminación u odio; datos personales de terceros sin autorización; información falsa o manipulada; contenido que vulnere derechos de autor o imagen; publicidad no autorizada.`,
    },
    {
      title: "7. Propiedad Intelectual",
      content: `ATHLETAIN y todos los elementos que la componen, incluyendo su software, código fuente, interfaces, diseños, logotipos, marcas, bases de datos y funcionalidades, son de propiedad exclusiva de ATHLETAIN o de sus licenciantes. Ningún derecho de propiedad intelectual se transfiere al Usuario por el mero uso de la Plataforma.

El Usuario conserva la titularidad de los derechos sobre el contenido que cargue o genere dentro de la Plataforma. Sin embargo, al publicar contenido, el Usuario otorga a ATHLETAIN una licencia no exclusiva, gratuita, revocable, limitada y necesaria para operar la Plataforma, la cual permite reproducir, almacenar, indexar, adaptar técnicamente, comunicar y poner a disposición dicho contenido dentro de los servicios de ATHLETAIN. Esta licencia se mantiene únicamente durante el tiempo en que el contenido permanezca en la Plataforma.

Los derechos morales sobre el contenido permanecen en cabeza del Usuario o del titular original.

Queda prohibido copiar, distribuir, descompilar, modificar, traducir, realizar ingeniería inversa o crear obras derivadas de la Plataforma o de cualquiera de sus componentes, salvo autorización previa y expresa de ATHLETAIN.`,
    },
    {
      title: "8. Uso de Imagen, Voz y Contenido Audiovisual",
      content: `ATHLETAIN permite que los Usuarios carguen y compartan fotografías, videos, grabaciones de voz y demás contenido audiovisual relacionado con su actividad deportiva.

8.1. Alcance de la autorización
Al cargar contenido audiovisual, el Usuario autoriza a ATHLETAIN a reproducirlo, almacenarlo, indexarlo, adaptarlo técnicamente, comunicarlo y ponerlo a disposición dentro de la Plataforma. Este uso se limita a fines deportivos, operativos y funcionales.

8.2. Reglas especiales para menores de edad
Cuando el contenido audiovisual corresponda a un menor de edad, su uso solo será permitido con la autorización previa, expresa y verificable del Representante Legal.

8.3. Cesión limitada de derechos patrimoniales
El Usuario otorga a ATHLETAIN una licencia no exclusiva, gratuita, revocable y limitada al tiempo de permanencia del contenido en la Plataforma.

8.4. Revocabilidad
El Usuario o el Representante Legal del menor podrá revocar en cualquier momento la autorización otorgada para el uso del contenido audiovisual.

8.5. Eliminación de contenido
El Usuario o Representante Legal del menor podrá solicitar la eliminación de contenido audiovisual en cualquier momento. ATHLETAIN eliminará dicho contenido de las áreas visibles sin perjuicio de copias de respaldo necesarias para cumplir obligaciones legales.

8.6. Prohibición de usos comerciales externos sin autorización adicional
El contenido audiovisual del Usuario, y especialmente el de menores de edad, no podrá ser utilizado por ATHLETAIN para fines comerciales, publicitarios o promocionales externos a la Plataforma sin una autorización independiente, específica y adicional.`,
    },
    {
      title: "9. Protección de Menores de Edad",
      content: `ATHLETAIN incorpora medidas reforzadas para garantizar la seguridad, dignidad y bienestar de los menores de edad. Todas las funcionalidades e interacciones que involucren a menores se rigen por el principio del interés superior del menor.

9.1. Interés superior del menor
Toda actividad dentro de ATHLETAIN que involucre a un menor deberá respetar su integridad física, emocional y digital.

9.2. Consentimiento del representante legal
El acceso, registro y uso de la Plataforma por parte de un menor solo podrá realizarse mediante la intervención de su Representante Legal, quien acepta estos Términos y supervisa el uso del menor.

9.3. Derecho del menor a ser escuchado
ATHLETAIN reconoce el derecho del menor a expresar su opinión sobre el uso de su información, imagen y contenido dentro de la Plataforma, conforme a su nivel de madurez.

9.4. Medidas de seguridad reforzadas
ATHLETAIN implementará: control de acceso y visibilidad del contenido; restricciones de interacción; monitoreo preventivo de conductas riesgosas; y protocolos de respuesta rápida ante reportes o incidentes.

9.5. Prohibición de contacto inapropiado
Queda estrictamente prohibido que cualquier Usuario establezca contacto afectivo, emocional o sexual con un menor; solicite información personal, imágenes privadas o datos sensibles; o realice insinuaciones o conductas de grooming, acoso o manipulación.

9.6. Reglas de interacción entre adultos y menores
Los adultos que interactúen con perfiles de menores deberán limitar su actividad a fines estrictamente deportivos, evaluativos o profesionales.

9.7. Facultades de bloqueo inmediato
ATHLETAIN podrá suspender, restringir o cancelar de manera inmediata cualquier Cuenta cuando existan indicios de riesgo para un menor.`,
    },
    {
      title: "10. Interacción entre Usuarios",
      content: `ATHLETAIN facilita la interacción entre deportistas, cazatalentos, clubes, agentes, entrenadores y otros actores del ecosistema deportivo. Estas interacciones deben desarrollarse exclusivamente dentro del marco deportivo, profesional y formativo.

10.1. Naturaleza de la interacción
Las interacciones dentro de ATHLETAIN tienen un propósito estrictamente deportivo y profesional. No implican relación laboral, contractual o de representación entre ATHLETAIN y los Usuarios.

10.2. Limitaciones
Está prohibido utilizar la Plataforma para fines personales, afectivos, comerciales no autorizados o ajenos a la actividad deportiva.

10.3. Prohibición de solicitudes inapropiadas
Los Usuarios no podrán realizar solicitudes que: no estén relacionadas con la actividad deportiva; involucren información personal o de contacto externo; impliquen encuentros presenciales no autorizados; sean de naturaleza emocional, afectiva o sexual; o puedan constituir grooming o acoso a menores.

10.4. Reglas para agentes, clubes y cazatalentos
Los Usuarios profesionales deberán: utilizar la Plataforma exclusivamente para fines de evaluación o identificación de talento; abstenerse de solicitar pagos no autorizados; mantener comportamiento respetuoso y transparente; y evitar presión, manipulación o promesas engañosas.

10.5. Reporte de conductas indebidas
Cualquier Usuario podrá reportar interacciones inapropiadas. ATHLETAIN evaluará el reporte y podrá suspender cuentas, eliminar contenido o informar a las autoridades.`,
    },
    {
      title: "11. Responsabilidad del Usuario",
      content: `El Usuario se compromete a utilizar ATHLETAIN de manera responsable y conforme a la finalidad deportiva de la Plataforma.

11.1. Uso adecuado de la Plataforma
El Usuario deberá utilizar la Plataforma exclusivamente para fines deportivos, formativos o de evaluación de talento. Está prohibido emplearla para actividades ilegales o ajenas a su propósito.

11.2. Veracidad de la información publicada
El Usuario garantiza que toda la información que publique, incluyendo datos personales, métricas deportivas, estadísticas y contenido audiovisual, es veraz y actual.

11.3. Responsabilidad por daños causados a terceros
El Usuario será el único responsable por las acciones, interacciones y contenido que genere. ATHLETAIN no será responsable por conductas de los Usuarios ni por disputas entre ellos.

11.4. Responsabilidad por el contenido audiovisual que publica
El Usuario declara que cuenta con los derechos necesarios para publicar el contenido audiovisual que cargue. Cuando el contenido corresponda a un menor de edad, el Representante Legal será responsable por su publicación y adecuación.`,
    },
    {
      title: "12. Régimen de Responsabilidad de ATHLETAIN",
      content: `ATHLETAIN opera como una plataforma tecnológica que facilita la creación de perfiles deportivos, la visualización de contenido y la interacción entre Usuarios. Su responsabilidad se encuentra limitada conforme a este capítulo.

12.1. Limitación de responsabilidad por contenido de terceros
El contenido publicado por los Usuarios es responsabilidad exclusiva de quien lo genera. ATHLETAIN no garantiza la veracidad, exactitud o legalidad de dicho contenido.

12.2. No garantía de resultados deportivos o profesionales
ATHLETAIN no garantiza que el uso de la Plataforma genere oportunidades deportivas, contratos, becas, fichajes, visibilidad profesional o cualquier otro resultado específico.

12.3. No responsabilidad por decisiones de clubes, agentes o cazatalentos
Los clubes, agentes, cazatalentos y demás Usuarios profesionales actúan de manera independiente y no representan a ATHLETAIN.

12.4. No responsabilidad por recomendaciones automatizadas o de bienestar
Las recomendaciones generadas por herramientas automatizadas de la Plataforma tienen un carácter meramente informativo y no sustituyen la evaluación de un profesional de la salud o del deporte.

12.5. No responsabilidad por fallas técnicas o interrupciones
La Plataforma no será responsable por fallas técnicas, interrupciones, demoras o pérdida de información causada por errores del sistema o eventos fuera de su control.

12.6. No responsabilidad por interacciones entre Usuarios
Las interacciones entre Usuarios son realizadas bajo su exclusiva responsabilidad. ATHLETAIN no garantiza la conducta, idoneidad, veracidad o intención de los Usuarios.

12.7. No responsabilidad por contactos externos o acuerdos privados
ATHLETAIN no participa, valida ni se hace responsable por acuerdos privados, transferencias de dinero o contactos que los Usuarios decidan realizar por fuera de la Plataforma.`,
    },
    {
      title: "13. Seguridad y Medidas Tecnológicas",
      content: `ATHLETAIN implementa medidas técnicas, humanas y administrativas destinadas a proteger la información, el contenido y la integridad de la Plataforma. ATHLETAIN adopta prácticas razonables de seguridad, incluyendo protocolos de cifrado, controles de acceso, monitoreo de actividad inusual, sistemas de detección de comportamientos riesgosos y procedimientos internos para la gestión de incidentes.

El Usuario es responsable de mantener la confidencialidad de sus credenciales, utilizar dispositivos seguros y adoptar prácticas básicas de protección digital. ATHLETAIN no será responsable por accesos indebidos derivados de negligencia del Usuario o vulneraciones ocurridas en dispositivos o redes externas a la Plataforma.

Cuando se detecten riesgos o incidentes de seguridad, ATHLETAIN podrá adoptar medidas preventivas o correctivas, tales como suspensión temporal de cuentas, bloqueo de funcionalidades o solicitud de verificación adicional.`,
    },
    {
      title: "14. Transferencia y Transmisión Internacional de Datos",
      content: `ATHLETAIN podrá realizar transferencias y transmisiones internacionales de datos personales cuando ello sea necesario para la operación de la Plataforma, la prestación de sus servicios o la interacción entre Usuarios ubicados en distintos países. Estas operaciones se realizarán conforme a la legislación colombiana de protección de datos y a las autorizaciones otorgadas por el Usuario o, en el caso de menores de edad, por su Representante Legal.

14.1. Alcance
La transferencia o transmisión internacional podrá incluir datos personales, datos sensibles, métricas deportivas y contenido audiovisual necesarios para: (i) la interacción entre deportistas, cazatalentos, clubes o agentes ubicados en otros países; y (ii) la operación tecnológica mediante proveedores de hosting, almacenamiento en la nube, analítica, verificación de identidad o servicios complementarios ubicados en el exterior.

14.2. Reglas especiales para menores de edad
Cuando los datos correspondan a un menor, la transferencia o transmisión internacional solo podrá realizarse con la autorización previa, expresa y verificable del Representante Legal.

14.3. Garantías de protección adecuada
ATHLETAIN verificará que los terceros ubicados en otros países cuenten con niveles adecuados de protección de datos, ya sea por normativas equivalentes, cláusulas contractuales o políticas internas alineadas con estándares internacionales.

14.4. Relación con la Política de Tratamiento de Datos Personales
Las reglas sobre transferencias internacionales se complementan con la Política de Tratamiento de Datos Personales de ATHLETAIN.`,
    },
    {
      title: "15. Suspensión, Restricción y Cancelación de Cuentas",
      content: `ATHLETAIN podrá suspender, restringir o cancelar cuentas cuando existan riesgos para la comunidad, incumplimientos de estos Términos o indicios de actividades ilegales o inapropiadas.

15.1. Causales de suspensión
ATHLETAIN podrá suspender temporalmente una Cuenta cuando existan indicios de: publicación de contenido inapropiado; conductas sospechosas o potencialmente fraudulentas; interacciones inapropiadas con otros Usuarios, especialmente con menores; o incumplimiento de obligaciones relacionadas con la veracidad de la información.

15.2. Causales de cancelación definitiva
ATHLETAIN podrá cancelar permanentemente una Cuenta cuando se confirme: suplantación de identidad; grooming, acoso o contacto indebido con menores; manipulación de métricas deportivas o fraude; actividades ilegales o comerciales no autorizadas; o infracciones reiteradas de estos Términos.

15.3. Procedimiento
Cuando sea posible, ATHLETAIN notificará al Usuario sobre la suspensión o cancelación. Sin embargo, podrá actuar sin previo aviso cuando existan riesgos inminentes para la comunidad, especialmente para menores de edad.

15.4. Efectos sobre el contenido
En caso de suspensión o cancelación, ATHLETAIN podrá restringir el acceso al contenido, eliminar contenido infractor y conservar copias de respaldo cuando sea necesario para cumplir obligaciones legales.

15.5. Reincidencia y bloqueos permanentes
Cuando un Usuario incurra en infracciones reiteradas o graves, ATHLETAIN podrá imponer bloqueos permanentes o impedir la creación de nuevas cuentas.`,
    },
    {
      title: "16. Enlaces y Servicios de Terceros",
      content: `ATHLETAIN puede integrar, utilizar o redirigir a servicios prestados por terceros para garantizar el funcionamiento, seguridad y disponibilidad de la Plataforma, incluyendo herramientas de verificación de identidad, proveedores de hosting, sistemas de almacenamiento en la nube, plataformas de analítica y pasarelas de autenticación.

El acceso a sitios web o servicios externos no implica respaldo, control o responsabilidad de ATHLETAIN sobre su contenido, políticas o funcionamiento. Cada tercero es responsable de sus propios términos y políticas de privacidad.

16.1. Limitación de responsabilidad
ATHLETAIN no será responsable por: contenidos, decisiones o políticas de terceros; fallas o interrupciones de servicios externos; daños causados por el uso de enlaces ajenos a la Plataforma; ni tratamientos de datos realizados directamente por terceros.

16.2. Interacción con servicios externos
Al utilizar servicios externos integrados en la Plataforma, el Usuario reconoce que la interacción puede requerir el envío de datos personales y que el tercero puede aplicar sus propias reglas de uso y privacidad.`,
    },
    {
      title: "17. Servicios Jurídicos Opcionales",
      content: `ATHLETAIN podrá poner a disposición de los Usuarios ciertos servicios jurídicos complementarios relacionados con la actividad deportiva o con el uso de la Plataforma. Estos servicios serán completamente opcionales, independientes del uso de la Plataforma y estarán sujetos a sus propios términos, condiciones y tarifas.

La decisión de contratar o no dichos servicios corresponde exclusivamente al Usuario y no condiciona el acceso, funcionamiento o permanencia en la Plataforma. ATHLETAIN no garantiza resultados específicos derivados de estos servicios ni será responsable por decisiones o actuaciones de los profesionales jurídicos que intervengan de manera autónoma.`,
    },
    {
      title: "18. Modificaciones a los Términos y Condiciones",
      content: `ATHLETAIN podrá modificar, actualizar o complementar estos Términos y Condiciones en cualquier momento, con el fin de reflejar cambios normativos, mejoras en la Plataforma, nuevas funcionalidades o ajustes operativos.

18.1. Procedimiento de notificación
Cuando se realicen modificaciones sustanciales, ATHLETAIN notificará a los Usuarios a través de los medios disponibles en la Plataforma: avisos en la aplicación, banners informativos, correos electrónicos o mensajes internos. La notificación incluirá la fecha de actualización y un enlace a la versión vigente.

18.2. Entrada en vigencia
Las modificaciones entrarán en vigencia a partir de la fecha indicada en la notificación. El uso continuado de ATHLETAIN después de la entrada en vigencia de los cambios constituirá aceptación plena de la versión actualizada.

18.3. Derecho del Usuario a retirarse si no acepta los cambios
Si el Usuario o el Representante Legal del menor no está de acuerdo con las modificaciones, podrá solicitar el cierre de la Cuenta. La terminación voluntaria no afectará la validez de las acciones realizadas antes de la solicitud.`,
    },
    {
      title: "19. Legislación Aplicable y Regulación",
      content: `Estos Términos y Condiciones se rigen exclusivamente por las leyes de la República de Colombia, incluyendo las normas aplicables en materia de comercio electrónico, protección de datos personales, derechos de autor, protección de menores y demás disposiciones relacionadas con la operación de plataformas digitales.

Cualquier controversia, reclamación o disputa derivada del uso de la Plataforma o de la interpretación de estos Términos y Condiciones será conocida por los jueces de la República de Colombia, con competencia en la ciudad de Cali, salvo que la ley disponga un fuero diferente de carácter obligatorio. El Usuario acepta esta jurisdicción como foro exclusivo para la resolución de conflictos relacionados con la Plataforma.`,
    },
    {
      title: "20. Contacto y Canales de Atención",
      content: `ATHLETAIN pone a disposición de los Usuarios canales oficiales para la presentación de peticiones, quejas, reclamos, solicitudes de información y demás comunicaciones relacionadas con el uso de la Plataforma.

Las PQRS podrán presentarse en el siguiente correo electrónico: support@athletain.com

ATHLETAIN gestionará estas solicitudes conforme a los tiempos y procedimientos establecidos en la normativa colombiana aplicable. El tiempo de respuesta podrá variar según la complejidad de la solicitud, pero ATHLETAIN procurará atender las PQRS dentro de los plazos razonables y legalmente permitidos.`,
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
   NIT 901.939.261-5 · Versión 01 · 27/01/2026
   ───────────────────────────────────────────────────────────── */
export const PRIVACY_POLICY: PolicyDocument = {
  version: DOCUMENT_VERSION,
  title: "Política de Tratamiento de Datos Personales",
  subtitle: "ATHLETAIN · NIT 901.939.261-5 · Versión 01",
  lastUpdated: "27 de enero de 2026",
  summary:
    "ATHLETAIN tratará tus datos personales, incluidos datos sensibles como información biométrica, imágenes, videos, métricas deportivas y datos de salud, conforme a esta Política y a la Ley 1581 de 2012. En el caso de menores de edad, el tratamiento se realizará únicamente con autorización del representante legal. Tienes derecho a conocer, actualizar, rectificar, suprimir tus datos y revocar esta autorización escribiendo a support@athletain.com.",
  sections: [
    {
      title: "1. Introducción",
      content: `ATHLETAIN es una plataforma digital diseñada para facilitar la visibilidad, proyección y conexión profesional entre deportistas y cazatalentos, agentes, clubes, entrenadores y demás actores del gremio deportivo, tanto en Colombia como en el exterior. En el desarrollo de sus actividades, ATHLETAIN recolecta, almacena, usa, circula y, en general, realiza operaciones de tratamiento sobre datos personales y sensibles de sus usuarios.

Los datos tratados por ATHLETAIN comprenden información de identificación, contacto, historial deportivo, métricas de rendimiento, datos provenientes de dispositivos tecnológicos (wearables), así como imágenes, fotografías, videos, clips deportivos y demás contenido audiovisual. Algunos de estos datos pueden constituir datos sensibles, incluyendo información biométrica, datos relacionados con la salud o el desempeño físico, y datos de menores de edad, cuyo tratamiento exige medidas reforzadas de protección conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.

Como titular de su información personal, cada usuario conserva el derecho constitucional y legal a conocer, actualizar, rectificar y suprimir sus datos personales, así como a revocar la autorización otorgada para su tratamiento. En consecuencia, ATHLETAIN adopta la presente Política de Tratamiento de Datos Personales con el fin de garantizar el respeto de dichos derechos y asegurar que todas las operaciones de tratamiento se realicen conforme a los principios, deberes y obligaciones previstos en la normativa colombiana de protección de datos personales.`,
    },
    {
      title: "2. Definiciones",
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
      title: "3. Habeas Data",
      content: `El derecho fundamental al Habeas Data se encuentra consagrado en el artículo 15 de la Constitución Política de Colombia, el cual establece que todas las personas tienen derecho a su intimidad personal y familiar, a su buen nombre y a exigir que el Estado y los particulares respeten y garanticen dichos derechos.

En virtud de este derecho, los usuarios de ATHLETAIN pueden ejercer control sobre los datos que suministran o que son tratados por la Plataforma. El Habeas Data protege la autodeterminación informativa del Titular, su honra, su intimidad y su libertad.

ATHLETAIN reconoce la importancia de este derecho y adopta medidas técnicas, humanas y administrativas para garantizar que el tratamiento de los datos personales se realice de manera adecuada, segura y conforme a los principios establecidos en la Ley 1581 de 2012 y sus normas reglamentarias.`,
    },
    {
      title: "4. Objetivos de la Política",
      content: `La presente Política tiene como objetivo establecer los lineamientos bajo los cuales ATHLETAIN realiza el tratamiento de los datos personales de sus usuarios, incluyendo deportistas, cazatalentos nacionales y extranjeros, representantes legales de menores y demás personas naturales que interactúan con la Plataforma. En este documento se informan las finalidades del tratamiento, los derechos de los Titulares y los procedimientos para ejercerlos.

ATHLETAIN adopta medidas técnicas, humanas, administrativas y jurídicas para garantizar que los datos personales, incluidos datos sensibles, biométricos, audiovisuales y datos de menores, sean tratados de manera segura, confidencial y conforme a la Ley 1581 de 2012 y sus normas reglamentarias.`,
    },
    {
      title: "5. Ámbito de Aplicación",
      content: `La presente Política aplica a todos los datos personales y datos sensibles recolectados, almacenados, usados, circulados, transmitidos o suprimidos por ATHLETAIN en el marco de su operación. Esto incluye la información suministrada por deportistas, cazatalentos nacionales y extranjeros, representantes legales de menores de edad, proveedores y cualquier otro usuario que interactúe con la Plataforma.

Esta Política cubre el tratamiento de datos personales contenidos en las bases de datos administradas por ATHLETAIN, así como aquellos tratados por terceros que actúen como Encargados del Tratamiento. Su aplicación se extiende a todas las actividades realizadas dentro del territorio colombiano y a las operaciones que involucren transferencias o accesos internacionales.`,
    },
    {
      title: "6. Titulares de la Información",
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
      title: "7. Principios Rectores del Tratamiento",
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
      title: "8. Recolección del Dato Personal",
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
      title: "9. Tipo de Información que Tratamos",
      content: `ATHLETAIN puede recolectar, almacenar, usar, circular o suprimir la siguiente información personal, clasificada según su naturaleza:

Datos de Deportistas (mayores y menores de edad): nombres y apellidos, documento de identidad, nombre del representante legal (si aplica), fecha y lugar de nacimiento, nacionalidad, dirección y ciudad de residencia, teléfono o celular, correo electrónico, fotografías, videos deportivos, grabaciones de voz, métricas deportivas, información de salud o lesiones, redes sociales, estadísticas deportivas, club o institución a la que pertenece.

Datos de Cazatalentos, Agentes, Clubes y Entrenadores: nombres y apellidos o razón social, documento de identidad o NIT, fecha y lugar de nacimiento, nacionalidad, dirección y ciudad de residencia, teléfono o celular, correo electrónico, fotografías, videos, grabaciones de voz, cargo (agente, scout, entrenador), club o institución, certificaciones o licencias deportivas, historial profesional.

Datos de Proveedores y Aliados Tecnológicos: nombre y apellido o razón social, documento de identidad o NIT, dirección, teléfono, correo electrónico, información contractual, información financiera para pagos.`,
    },
    {
      title: "10. Finalidades del Tratamiento de la Información",
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
      title: "11. Tratamiento del Dato Personal",
      content: `Al aceptar esta Política, los Titulares autorizan de manera previa, expresa e informada a ATHLETAIN para realizar el tratamiento de sus datos personales conforme a las finalidades descritas. Este tratamiento incluye la recolección, almacenamiento, uso, análisis, circulación, transmisión, transferencia y supresión de la información cuando sea necesario para la operación de la Plataforma.

ATHLETAIN podrá actuar como Responsable o Encargado del Tratamiento, según corresponda, y en ambos casos cumplirá con las obligaciones establecidas por la normativa de protección de datos personales. La Plataforma se abstendrá de divulgar información personal a terceros no autorizados y solo compartirá datos cuando exista autorización del Titular o una obligación legal que así lo exija.

ATHLETAIN velará porque los terceros que reciban información personal cumplan con estándares adecuados de protección y seguridad. En ningún caso se compartirán datos sensibles sin autorización expresa del Titular o sin que exista un fundamento legal que lo permita.`,
    },
    {
      title: "12. Transferencia y Transmisión Internacional de Datos Personales",
      content: `ATHLETAIN podrá realizar transferencias y transmisiones internacionales de datos personales cuando ello sea necesario para el funcionamiento de la Plataforma, la prestación de sus servicios o la interacción entre deportistas y cazatalentos ubicados en otros países. Estas operaciones se llevarán a cabo conforme a la Ley 1581 de 2012, el Decreto 1074 de 2015 y las normas que regulan la protección de datos personales en Colombia.

Cuando los datos sean enviados a terceros ubicados en el exterior que actúen como Responsables, ATHLETAIN realizará una transferencia internacional, garantizando que dichos terceros cuenten con estándares adecuados de protección.

Cuando los datos sean enviados a proveedores tecnológicos, plataformas de hosting, cloud hosting, servicios de analítica, verificación de identidad u otros aliados que actúen como Encargados, se realizará una transmisión internacional bajo relaciones que aseguren la confidencialidad, seguridad y el cumplimiento de las obligaciones legales.

En todos los casos, ATHLETAIN adoptará medidas para asegurar que el receptor de la información implemente niveles adecuados de protección, y que el tratamiento se realice únicamente para las finalidades autorizadas.`,
    },
    {
      title: "13. Mecanismos de Protección de la Información",
      content: `ATHLETAIN implementa medidas técnicas, humanas y administrativas para proteger los datos personales contra acceso no autorizado, pérdida, adulteración, uso indebido o divulgación no permitida. Estas medidas incluyen controles de acceso, cifrado, monitoreo, autenticación reforzada y protocolos de seguridad aplicables al contenido audiovisual, biométrico y a la información de menores.

La información recolectada es almacenada en servicios de infraestructura tecnológica y proveedores de nube que cumplen con estándares internacionales de seguridad y protección de datos. El acceso a la información está restringido exclusivamente al personal autorizado y a los proveedores tecnológicos que actúan como Encargados del Tratamiento bajo acuerdos de confidencialidad y seguridad.`,
    },
    {
      title: "14. Derechos de los Titulares de la Información",
      content: `Los Titulares cuyos datos personales sean tratados por ATHLETAIN, conforme a la Ley 1581 de 2012 y sus normas reglamentarias, tienen derecho a:

14.1. Conocer, actualizar y rectificar sus datos personales cuando sean parciales, inexactos, incompletos, fraccionados, induzcan a error o cuando su tratamiento no esté autorizado.

14.2. Ser informados sobre el uso que ATHLETAIN da a sus datos personales, incluyendo datos sensibles, biométricos y contenido audiovisual.

14.3. Presentar consultas, quejas o reclamos ante la Superintendencia de Industria y Comercio cuando consideren que existe una infracción a la normativa de protección de datos personales.

14.4. Revocar la autorización otorgada o solicitar la supresión de sus datos cuando no exista un deber legal o contractual que obligue a su conservación.

14.5. Acceder de manera gratuita a los datos personales que hayan sido objeto de tratamiento por parte de ATHLETAIN.

14.6. Solicitar prueba de la autorización otorgada para el tratamiento de sus datos, salvo en los casos en los que la ley no exija dicha autorización.`,
    },
    {
      title: "15. Procedimiento para Peticiones, Consultas o Reclamos",
      content: `Los Titulares que deseen ejercer sus derechos o presentar una petición, consulta o reclamo relacionado con el tratamiento de sus datos personales podrán hacerlo mediante el correo electrónico oficial: support@athletain.com

La solicitud deberá incluir, como mínimo: nombres y apellidos del Titular; tipo y número de identificación; datos de contacto (correo electrónico y número de teléfono); asunto; descripción clara de la solicitud, consulta o reclamo; y documentos o soportes que el Titular considere pertinentes.

Cuando se trate de datos personales de menores de edad, las solicitudes deberán ser presentadas por su representante legal, quien deberá acreditar dicha calidad.

ATHLETAIN dará respuesta a las consultas dentro de un plazo máximo de diez (10) días hábiles, prorrogables por cinco (5) días hábiles adicionales cuando sea necesario.`,
    },
    {
      title: "16. Autorización del Titular",
      content: `Antes de realizar cualquier tratamiento de datos personales, ATHLETAIN solicitará al Titular, o al representante legal en el caso de menores de edad, una autorización previa, expresa e informada, indicando de manera clara las finalidades para las cuales se recolecta y utiliza la información. Esta autorización podrá otorgarse mediante mecanismos digitales, formularios electrónicos, casillas de verificación, registros en la aplicación o cualquier medio que permita conservar prueba de su otorgamiento.

El Titular es responsable de la veracidad, exactitud y completitud de la información que suministra. En consecuencia, ATHLETAIN no será responsable por los perjuicios derivados de datos falsos, inexactos, incompletos o no actualizados proporcionados por el Titular o por su representante legal.`,
    },
    {
      title: "17. Aviso de Privacidad",
      content: `ATHLETAIN informa al Titular que sus datos personales, incluidos datos sensibles como información biométrica, imágenes, videos, métricas deportivas y datos relacionados con la salud o el rendimiento físico, serán tratados conforme a la Política de Tratamiento de Datos Personales disponible en la plataforma web de ATHLETAIN. En el caso de menores de edad, el tratamiento se realizará únicamente con la autorización previa y verificable del representante legal.

Responsable del Tratamiento: ATHLETAIN.

Finalidades principales: Creación y administración de cuenta del usuario; gestión de perfiles deportivos, contenido audiovisual, interacción entre usuarios y análisis de métricas; implementar medidas de seguridad y verificación; y permitir la interacción entre deportistas, cazatalentos y representantes.

Derechos del Titular: Conocer, actualizar, rectificar, suprimir datos y revocar la autorización.

Canales de contacto: support@athletain.com`,
    },
    {
      title: "18. Consecuencias de la Aceptación",
      content: `Los usuarios de la Plataforma que acepten esta Política y continúen con los procedimientos de registro, uso o suministro de información:

18.1. Declaran que conocen, comprenden y aceptan el contenido de la Política de Tratamiento de Datos Personales de ATHLETAIN.

18.2. Manifiestan que han otorgado su consentimiento libre, previo, expreso e informado para la recolección y tratamiento de sus datos personales, incluidos datos sensibles, biométricos, audiovisuales y, en el caso de menores, aquellos suministrados por su representante legal.

18.3. Expresan que la información registrada en la Plataforma les pertenece, es veraz y actual, o que cuentan con la autorización válida para suministrarla a ATHLETAIN cuando actúan en nombre de un tercero, especialmente en el caso de menores de edad.

18.4. Declaran que cada uno de los datos proporcionados es cierto, completo y corresponde a la realidad, asumiendo la responsabilidad por su exactitud.`,
    },
    {
      title: "19. Modificaciones a la Política",
      content: `ATHLETAIN se reserva el derecho de modificar, actualizar o complementar en cualquier momento la presente Política de Tratamiento de Datos Personales. Cualquier cambio será publicado en los canales oficiales de la Plataforma, incluyendo su sitio web y/o aplicación móvil, y entrará en vigor desde su divulgación.

Cuando las modificaciones impliquen cambios sustanciales en las finalidades del tratamiento o en las condiciones bajo las cuales fue otorgada la autorización, ATHLETAIN solicitará nuevamente el consentimiento de los Titulares, conforme a la normativa aplicable.`,
    },
    {
      title: "20. Término de Vigencia de las Bases de Datos",
      content: `Los datos personales recolectados por ATHLETAIN se almacenan en sistemas digitales, servidores en la nube y/o infraestructuras tecnológicas utilizadas por la Plataforma, bajo medidas de seguridad técnicas, administrativas y jurídicas.

Independientemente del medio de almacenamiento, los datos personales serán conservados únicamente durante el tiempo necesario para cumplir con las finalidades informadas al Titular. Una vez dichas finalidades se hayan agotado, los datos podrán ser suprimidos dentro de los plazos establecidos por la ley, teniendo en cuenta la naturaleza de la información (contable, financiera, contractual, laboral o de seguridad social).`,
    },
    {
      title: "21. Vigencia de la Política",
      content: `La presente Política de Tratamiento de Datos Personales entra en vigor a partir de su publicación el 27/01/2026 por parte de ATHLETAIN y permanecerá vigente hasta que sea modificada o reemplazada por una nueva versión. Esta Política sustituye cualquier versión previa adoptada por la Plataforma.`,
    },
    {
      title: "22. Legislación Aplicable",
      content: `La presente Política de Tratamiento de Datos Personales se rige por la legislación de la República de Colombia, en especial por la Ley 1581 de 2012, el Decreto 1074 de 2015 y las demás normas que regulan la protección de datos personales, así como por las directrices y circulares emitidas por la Superintendencia de Industria y Comercio (SIC).

Cualquier interpretación, aplicación o controversia relacionada con esta Política se someterá exclusivamente a las autoridades competentes en Colombia.`,
    },
  ],
};
