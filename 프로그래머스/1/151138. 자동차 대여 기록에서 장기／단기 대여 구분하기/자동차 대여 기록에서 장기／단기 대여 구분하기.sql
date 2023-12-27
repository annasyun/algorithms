SELECT
    history_id,
    car_id,
    TO_CHAR(START_DATE, 'YYYY-MM-DD') AS START_DATE,
    TO_CHAR(END_DATE, 'YYYY-MM-DD') AS END_DATE,
    CASE
        WHEN (END_DATE - START_DATE) >= 29 THEN '장기 대여'
        ELSE '단기 대여'
    END AS RENT_TYPE
FROM
    (SELECT
        history_id,
        car_id,
        START_DATE,
        END_DATE,
        END_DATE - START_DATE AS DAY_DIFF
    FROM
        CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE
        START_DATE >= TO_DATE('2022-09-01', 'YYYY-MM-DD') AND START_DATE < TO_DATE('2022-10-01', 'YYYY-MM-DD')
    )
ORDER BY
    history_id DESC;